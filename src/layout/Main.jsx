import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";

const Main = () => {
  const [chatData, setChatData] = useState([]);
  const [selectedChat,setSelectedChat] = useState({})

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

  const handleMessage = message =>{
    // console.log(message);
    setSelectedChat(message);
  };

  console.log(selectedChat)
  return (
    <div className="flex ">
      <Sidebar  chatData={chatData} handleMessage={handleMessage} dark={dark} darkModeHandler={darkModeHandler}></Sidebar>
      <Content selectedChat={selectedChat} dark={dark}></Content>
    </div>
  );
};

export default Main;
