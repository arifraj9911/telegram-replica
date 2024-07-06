import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiVolumeMute } from "react-icons/bi";
import { BsEmojiSmile, BsEraser } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowForward, IoMdSend } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuPaintbrush } from "react-icons/lu";
import { MdCall, MdOutlineKeyboardVoice } from "react-icons/md";
import { PiBookOpenUser } from "react-icons/pi";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const [textValue, setTextValue] = useState("");
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const currentUser = location.pathname.split("/")[1];

  return (
    <div className="flex gap-6 ">
      <div className="w-1/3   bg-white px-5 py-2">
        <div className="flex items-center gap-6">
          <GiHamburgerMenu className="text-[22px] text-gray-400" />
          <input
            type="text"
            className="border w-full py-1 px-5 outline-none rounded-2xl bg-[#F1F1F1]"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="fixed border border-t-0 border-b-0  border-gray-300 w-full bg-white px-2  py-1 top-0">
          <div className="flex">
            <div>
              <h2 className="text-[16px] font-semibold capitalize">
                {currentUser}
              </h2>
              <p className="text-sm text-gray-400 font-normal">
                last seen 12/12/24
              </p>
            </div>
            <div className="flex items-center  gap-4 absolute left-1/2 ml-16 top-4 ">
              <IoSearchOutline className="text-xl" />
              <MdCall className="text-xl" />
              <PiBookOpenUser className="text-xl" />

              <div className="flex items-center flex-col">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="">
                    <HiDotsVertical className="text-xl " />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
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
                      <a>
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
        <div
          style={{
            backgroundImage: "url(https://i.ibb.co/5MyL7d1/telegram.png)",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" w-full flex-grow flex flex-col-reverse max-h-full overflow-y-scroll px-6 py-16 "
        >
          <Outlet></Outlet>
        </div>
        <div className="fixed w-full bg-white    bottom-0">
          <div className="relative">
            <GrAttachment
              type="file"
              className="absolute top-[14px] left-2 text-gray-400 text-xl"
            />
            <input
              onChange={(e) => setTextValue(e.target.value)}
              value={textValue}
              type="text"
              name=""
              placeholder="Write a message..."
              className="border border-gray-300 border-t-0 border-b-0 px-10 py-[10px] outline-none w-full"
              id=""
            />
            <div className="flex absolute left-1/2 ml-32 top-3 gap-6">
              <BsEmojiSmile className="text-[22px] text-gray-500" />
              {textValue.length > 0 ? (
                <IoMdSend className="text-[#40A7E3] text-[22px]" />
              ) : (
                <MdOutlineKeyboardVoice className="text-[22px] text-gray-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
