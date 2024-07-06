/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";

const Sidebar = ({ chatData, handleMessage,darkModeHandler,dark }) => {
  return (
    <div className="w-1/3  relative bg-white px-4 py-2 dark:bg-[#17212B] dark:text-[#b9b9b9]">
      <div className="flex sticky bg-white dark:bg-[#17212B] top-0 items-center gap-4">
        <div className="drawer-content">
          <label htmlFor="my-drawer" className=" drawer-button">
            <GiHamburgerMenu className="text-[22px] text-gray-400 cursor-pointer" />
          </label>
        </div>

        <input
          type="text"
          className="border dark:border-[#17212B] w-full py-1 px-5 outline-none rounded-2xl dark:bg-[#242F3D] bg-[#F1F1F1]"
          placeholder="Search..."
        />
      </div>

      <div className="max-h-screen mt-10 overflow-y-auto space-y-6 ">
        {chatData?.map((chat) => (
          <div
            onClick={() => handleMessage(chat)}
            key={chat.id}
            className="flex items-center gap-4 cursor-pointer "
          >
            <div className="avatar z-0">
              <div className="w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex justify-between rounded-md hover:bg-[#F1F1F1] dark:hover:bg-[#202B36] p-2 w-full">
              <div>
                <h4 className="text-lg font-bold dark:text-[#fff]">{chat?.sender?.name}</h4>
                <p className="text-sm">
                  {chat.message.length < 45 ? (
                    <span>{chat?.message}</span>
                  ) : (
                    <span>{chat?.message.slice(0, 45)}....</span>
                  )}
                </p>
              </div>
              <div className="text-gray-600 text-[14px] mt-1">Fri</div>
            </div>
          </div>
        ))}
      </div>
      <NavbarDrawer dark={dark} darkModeHandler={darkModeHandler}></NavbarDrawer>
    </div>
  );
};

export default Sidebar;
