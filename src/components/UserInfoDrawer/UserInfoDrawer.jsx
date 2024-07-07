/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { IoHandLeftOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { VscEdit } from "react-icons/vsc";

const UserInfoDrawer = ({ selectedChat }) => {
  const { sender, created_at } = selectedChat;

  const lastSeen = created_at?.split(".")[0];
  const lastSeenDate = lastSeen?.split("T")[0];
  const lastSeenTime = lastSeen?.split("T")[1];
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <div>
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-xl font-semibold">User Info</h4>
              <div className="flex gap-3 text-lg items-center">
                <span className="mt-1">
                  <form method="dialog">
                    <button>
                      <RxCross1 />
                    </button>
                  </form>
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <h2 className="text-lg dark:text-[#fff] font-semibold capitalize">
                  {sender?.name}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-normal">
                  last seen {lastSeenDate} at {lastSeenTime} PM
                </p>
              </div>
            </div>
            <div className=" border-t-8 my-6"></div>
            <ul>
              <li className="">
                
                <a className="flex items-start gap-8">
                <BsExclamationCircle className="text-xl mt-1" />
                  <span>
                  <p className="text-sm font-semibold">+8801717171717</p>
                  <p className="text-sm text-gray-400 ml-1">Mobile</p>
                  </span>
                </a>
              </li>
              <div className="divider my-3"></div>
              <li className="">
                
                <a className="flex items-start gap-6 w-full justify-between">
                <FaRegBell className="text-xl mt-1" />
                  <p className="text-sm font-semibold mt-1 mr-10"> Notifications</p>
                  <input
                    type="checkbox"
                    className="toggle bg-[#40A7E3] hover:bg-[#40A7E3]"
                    defaultChecked
                  />
                </a>
              </li>
            </ul>
            <div className=" border-t-8 my-6"></div>
            <ul className="space-y-1">
              <li>
                
                <a className="flex items-start gap-6">
                <PiShareFat className="text-xl mt-1" />
                  <p className="text-sm font-semibold"> Share this contact</p>
                </a>
              </li>
              <li className="">
                
                <a className="flex items-start gap-6">
                <VscEdit className="text-xl mt-1" />
                  <p className="text-sm font-semibold"> Edit contact</p>
                </a>
              </li>
              <li className="">
                
                <a className="flex items-start gap-6" >
                <AiOutlineDelete className="text-xl mt-1" />
                  <p className="text-sm font-semibold"> Delete contact</p>
                </a>
              </li>
              <li className="text-red-500">
                
                <a className="flex items-start gap-6">
                <IoHandLeftOutline className="text-xl mt-1" />
                  <p className="text-sm font-semibold"> Block user</p>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserInfoDrawer;
