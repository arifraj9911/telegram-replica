import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";

const Main = () => {
  const [chatData, setChatData] = useState([]);
  const [selectedChat,setSelectedChat] = useState({})
  

  useEffect(() => {
    fetch("chat_id_data.json")
      .then((res) => res.json())
      .then((data) => setChatData(data));
  }, []);

  const handleMessage = message =>{
    // console.log(message);
    setSelectedChat(message);
  };

  console.log(selectedChat)
  return (
    <div className="flex gap-6 ">
      <Sidebar chatData={chatData} handleMessage={handleMessage}></Sidebar>
      <Content selectedChat={selectedChat}></Content>
    </div>
  );
};

export default Main;
