import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Main = () => {
  const [chatData, setChatData] = useState([]);
  const [selectedChat, setSelectedChat] = useState({
    message: "Select a chat to start messaging",
  });

  const [reply,setReply] = useState([])

  const [dark, setDark] = useState(localStorage.getItem("darkMode"));

  useEffect(() => {
    fetch("http://localhost:5000/chats")
      .then((res) => res.json())
      .then((data) => setChatData(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/reply-chats")
      .then((res) => res.json())
      .then((data) => setReply(data));
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
        <Content selectedChat={selectedChat} chatData={chatData} setSelectedChat={setSelectedChat} dark={dark} reply={reply}></Content>
      </div>
      <Toaster />
    </div>
  );
};

export default Main;
