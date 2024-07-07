/* eslint-disable react/prop-types */

import { BsExclamationCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";
import { IoHandLeftOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RxCross1, RxTimer } from "react-icons/rx";
import { HiDotsVertical } from "react-icons/hi";
import { TfiGift } from "react-icons/tfi";
import toast from "react-hot-toast";

const ViewProfileModal = ({ selectedChat }) => {
  const { sender, created_at } = selectedChat;

  const lastSeen = created_at?.split(".")[0];
  const lastSeenDate = lastSeen?.split("T")[0];
  const lastSeenTime = lastSeen?.split("T")[1];
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-xl font-semibold">User Info</h4>
            <div className="flex gap-3 text-lg items-center">
              <span>
                <MdCall
                  className="cursor-pointer"
                  onClick={() => toast.success("Ringing Call, Cring Cring !!!")}
                />
              </span>
              <span>
                <div className="flex items-center flex-col ">
                  <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="">
                      <HiDotsVertical className="text-xl " />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] dark:bg-[#17212B] dark:text-[#fff] w-52 p-2 shadow"
                    >
                      <li>
                        <a>
                          <RxTimer />
                          Auto Delete
                        </a>
                      </li>
                      <hr />
                      <li>
                        <a>
                          <PiShareFat className="" />
                          Share this contact
                        </a>
                      </li>
                      <li>
                        <a>
                          <VscEdit className="" />
                          Edit contact
                        </a>
                      </li>
                      <li>
                        <a>
                          <TfiGift />
                          Gift Premium
                        </a>
                      </li>
                      <li>
                        <a className="">
                          <IoHandLeftOutline className="" />
                          Block User
                        </a>
                      </li>
                      <li>
                        <a className="text-red-500">
                          <AiOutlineDelete />
                          Delete contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
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
            <li className="flex items-start gap-6">
              <BsExclamationCircle className="text-xl mt-1" />
              <a>
                <p className="text-sm font-semibold"> +8801717171717</p>
                <p className="text-sm text-gray-400">Mobile</p>
              </a>
            </li>
            <div className="divider my-3"></div>
            <li className="flex items-start gap-6">
              <FaRegBell className="text-xl mt-1" />
              <a className=" w-full flex items-center justify-between">
                <p className="text-sm font-semibold"> Notifications</p>
                <input
                  type="checkbox"
                  className="toggle bg-[#40A7E3] hover:bg-[#40A7E3]"
                  defaultChecked
                />
              </a>
            </li>
            <li className=" flex mt-6 ml-10">
              <a className="  w-full ">
                <p className="text-[#40A7E3] uppercase font-medium text-sm">
                  Send Message
                </p>
              </a>
            </li>
          </ul>
          <div className=" border-t-8 my-6"></div>
          <ul className="space-y-4">
            <li className="flex items-start gap-6">
              <PiShareFat className="text-xl mt-1" />
              <a>
                <p className="text-sm font-semibold"> Share this contact</p>
              </a>
            </li>
            <li className="flex items-start gap-6">
              <VscEdit className="text-xl mt-1" />
              <a>
                <p className="text-sm font-semibold"> Edit contact</p>
              </a>
            </li>
            <li className="flex items-start gap-6">
              <AiOutlineDelete className="text-xl mt-1" />
              <a>
                <p className="text-sm font-semibold"> Delete contact</p>
              </a>
            </li>
            <li className="flex items-start text-red-500 gap-6">
              <IoHandLeftOutline className="text-xl mt-1" />
              <a>
                <p className="text-sm font-semibold"> Block user</p>
              </a>
            </li>
          </ul>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ViewProfileModal;
