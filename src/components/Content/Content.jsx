/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiVolumeMute } from "react-icons/bi";
import { BsEmojiSmile, BsEraser } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
// import { GiHamburgerMenu } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowForward, IoMdSend } from "react-icons/io";
import { IoArrowBackOutline, IoSearchOutline } from "react-icons/io5";
import { LuPaintbrush } from "react-icons/lu";
import { MdCall, MdOutlineKeyboardVoice } from "react-icons/md";
import { PiBookOpenUser } from "react-icons/pi";
import ViewProfileModal from "../ViewProfileModal/ViewProfileModal";
import UserInfoDrawer from "../UserInfoDrawer/UserInfoDrawer";
import toast from "react-hot-toast";
// import { Outlet, useLocation } from "react-router-dom";

const Content = ({ selectedChat, dark, setSelectedChat, reply }) => {
  const { message, sender, created_at } = selectedChat;
  const [textValue, setTextValue] = useState("");

  // console.log(selectedChat,created_at);
  const lastSeen = created_at?.split(".")[0];
  const lastSeenDate = lastSeen?.split("T")[0];
  const lastSeenTime = lastSeen?.split("T")[1];
  // console.log(created_at);
  // console.log(lastSeenDate, lastSeenTime);

  const handleMessageInput = (e) => {
    setTextValue(e.target.value);
  };

  const handleSendMessage = () => {
    console.log(textValue);

    fetch("http://localhost:5000/chats", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ replyMessage: textValue }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={` w-full  relative  `}>
      {selectedChat.sender && (
        <div className="fixed border border-l-0 md:border-l border-t-0 border-b-0  border-gray-300 dark:border-[#0E1621] w-full bg-white dark:bg-[#17212B] dark:text-[#b9b9b9]  px-3  py-1 top-0">
          <div className="flex">
            <div className="flex gap-4 items-center">
              <IoArrowBackOutline
                onClick={() =>
                  setSelectedChat({
                    message: "Select a chat to start messaging",
                  })
                }
                className="mr-2 text-xl flex md:hidden"
              />
              <div className="avatar md:hidden">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <h2 className="text-[16px] dark:text-[#fff] font-semibold capitalize">
                  {sender?.name}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-normal">
                  last seen {lastSeenDate} at {lastSeenTime} PM
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-4 absolute left-1/2 ml-[140px] md:ml-20 top-4 ">
              <IoSearchOutline className="text-xl hidden md:flex" />
              <MdCall
                onClick={() => toast.success("Ringing Call, Cring Cring !!!")}
                className="text-xl cursor-pointer"
              />
              <div className="hidden md:flex">
                <div className="drawer-content">
                  <label htmlFor="my-drawer-4" className="drawer-button">
                    <PiBookOpenUser className="text-xl  cursor-pointer" />
                  </label>
                </div>
              </div>

              <div className="flex items-center flex-col ">
                <div className="dropdown dropdown-end ">
                  <div tabIndex={0} role="button" className="">
                    <HiDotsVertical className="text-xl text" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] dark:bg-[#17212B] dark:text-[#fff] w-52 p-2 shadow"
                  >
                    <li>
                      <a>
                        <BiVolumeMute />
                        Mute Notification
                        <IoIosArrowForward />
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        <FaRegCircleUser />
                        View profile
                      </a>
                    </li>
                    <li>
                      <a>
                        <LuPaintbrush />
                        Set Wallpaper
                      </a>
                    </li>
                    <li>
                      <a>
                        <BsEraser />
                        Clear History
                      </a>
                    </li>
                    <li>
                      <a className="text-red-500">
                        <AiOutlineDelete />
                        Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-full flex-grow flex ${
          !dark
            ? `bg-[url('https://i.ibb.co/5MyL7d1/telegram.png')] `
            : `dark:bg-[#0E1621]`
        } bg-cover h-[100vh] bg-center bg-no-repeat ${
          selectedChat.sender
            ? `flex-col-reverse max-h-full`
            : `text-center flex-col items-center justify-center`
        }  overflow-y-scroll px-3 py-14 `}
      >
        {selectedChat.sender && (
          <div className={` mt-2`}>
            {reply.map((replyMessage) => (
              <div
                key={replyMessage._id}
                className={` flex  items-end justify-center flex-col-reverse  `}
              >
                <p className="bg-white mb-2 py-2 px-4 w-3/4 md:w-1/2 max-w-max rounded-3xl rounded-br-none dark:bg-[#182533] dark:text-[#fff]">
                  {replyMessage?.replyMessage}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* <Outlet></Outlet> */}
        <span
          className={`${
            selectedChat.sender
              ? `p-3 rounded-bl-none bg-white`
              : `py-1 px-2 text-white bg-[#729965] text-sm`
          }   w-3/4 md:w-1/2 max-w-max rounded-3xl dark:bg-[#182533] dark:text-[#fff]  ]`}
        >
          {message}
        </span>
      </div>

      {selectedChat.sender && (
        <div className="fixed w-full bg-white dark:bg-black  bottom-0 ">
          <div className="relative ">
            <GrAttachment
              type="file"
              className="absolute hidden md:flex top-[14px] left-3 text-gray-400 text-xl"
            />
            <BsEmojiSmile
              type="file"
              className="absolute flex md:hidden top-[14px] left-3 text-gray-400 text-xl"
            />
            <input
              onChange={handleMessageInput}
              value={textValue}
              type="text"
              name=""
              placeholder="Write a message..."
              className="border border-x-0 md:border-x border-gray-300 dark:bg-[#17212B] dark:text-[#fff] dark:border-[#0E1621] border-t-0 border-b-0 px-10  md:px-12 py-[10px] outline-none w-full"
              id=""
            />
            <div className="flex absolute left-1/2 ml-[140px] top-3 gap-3 md:gap-6">
              <BsEmojiSmile className="text-[22px] hidden md:flex text-gray-500" />
              <GrAttachment
                className={`${
                  textValue.length > 0 && `hidden`
                } text-[22px] flex md:hidden text-gray-500`}
              />
              {textValue.length > 0 ? (
                <IoMdSend
                  onClick={handleSendMessage}
                  className="text-[#40A7E3] cursor-pointer text-[22px] ml-8 md:ml-0"
                />
              ) : (
                <MdOutlineKeyboardVoice className="text-[22px] text-gray-500" />
              )}
            </div>
          </div>
        </div>
      )}
      <ViewProfileModal selectedChat={selectedChat}></ViewProfileModal>
      <UserInfoDrawer selectedChat={selectedChat}></UserInfoDrawer>
    </div>
  );
};

export default Content;
