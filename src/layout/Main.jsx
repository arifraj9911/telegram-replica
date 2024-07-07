import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";

const Main = () => {
  const [chatData, setChatData] = useState([]);
  const [selectedChat, setSelectedChat] = useState({
    message: "Select a chat to start messaging",
  });

  const [dark, setDark] = useState(localStorage.getItem("darkMode"));

  useEffect(() => {
    fetch("chat_id_data.json")
      .then((res) => res.json())
      .then((data) => setChatData(data));
  }, []);

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
    // console.log(message);
    setSelectedChat(message);
  };

  console.log(selectedChat);
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
        <Content selectedChat={selectedChat} setSelectedChat={setSelectedChat} dark={dark}></Content>
      </div>
    </div>
  );
};

export default Main;
