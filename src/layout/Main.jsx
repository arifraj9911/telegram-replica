import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HashLoader } from "react-spinners";

const Main = () => {
  const [selectedChat, setSelectedChat] = useState({
    message: "Select a chat to start messaging",
  });

  const [dark, setDark] = useState(localStorage.getItem("darkMode"));

  const {
    data: chatData = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["chatData"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/chats");
      return res.data;
    },
  });

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const darkModeHandler = () => {
    setDark((prevMode) => !prevMode);
  };

  const handleMessage = (message) => {
    // console.log(message._id);
    refetch();
    setSelectedChat(message);
    
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color="#40A7E3" />
      </div>
    );
  }

  // console.log(selectedChat);
  return (
    <div className="flex ">
      <div
        className={`${
          selectedChat.sender ? `hidden ` : `block`
        } md:block lg:w-1/3`}
      >
        <Sidebar
          chatData={chatData}
          handleMessage={handleMessage}
          dark={dark}
          darkModeHandler={darkModeHandler}
          selectedChat={selectedChat}
        ></Sidebar>
      </div>
      <div
        className={`${
          selectedChat.sender ? `block` : `hidden`
        } flex-1  md:flex`}
      >
        <Content
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          dark={dark}
          refetch={refetch}
        ></Content>
      </div>
      <Toaster />
    </div>
  );
};

export default Main;
