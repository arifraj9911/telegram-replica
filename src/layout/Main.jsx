import { GrAttachment } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { PiBookOpenUser } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex gap-6 ">
      <div className="w-1/3  bg-white p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </div>

      <div className="flex-1 relative">
        <div className="fixed border border-t-0 border-b-0  border-gray-300 w-full bg-white px-2  py-1 top-0">
          <div className="flex">
            <div>
              <h2 className="text-[16px] font-semibold">Name</h2>
              <p className="text-sm text-gray-400 font-normal">
                last seen 12/12/24
              </p>
            </div>
            <div className="flex items-center  gap-4 absolute left-1/2 ml-16 top-4 ">
              <IoSearchOutline className="text-xl" />
              <MdCall className="text-xl" />
              <PiBookOpenUser className="text-xl" />
              <HiDotsVertical className="text-xl" />
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
        <div className="fixed w-full bg-white   bottom-0">
          <GrAttachment className="absolute top-[14px] left-2 text-gray-400 text-xl" />
          <input
            type="text"
            name=""
            placeholder="Write a message..."
            className="border border-gray-300 border-t-0 px-10 py-[10px] outline-none w-full"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
