/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import {
  IoCallOutline,
  IoMoon,
  IoMoonOutline,
  IoSettingsOutline,
  IoSunny,
} from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ darkModeHandler, dark }) => {
  const [toggleArrow, setToggleArrow] = useState(false);
  // const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  // const [dark, setDark] = useState(localStorage.getItem("darkMode"));

  // const handleToggleTheme = e =>{
  //   if(e.target.checked){
  //       setTheme("dark")
  //   }else{
  //       setTheme("light")
  //   }
  // }

  // useEffect(() => {
  //   const isDarkMode = localStorage.getItem("darkMode") === "true";
  //   setDark(isDarkMode);
  // }, []);

  // useEffect(() => {
  //   document.body.classList.toggle("dark", dark);
  //   localStorage.setItem("darkMode", dark);
  // }, [dark]);

  // const darkModeHandler = () => {
  //   setDark((prevMode) => !prevMode);
  // };

  // useEffect(()=>{
  //   localStorage.setItem("theme",theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme",localTheme)
  // },[theme])
  //   console.log(toggleArrow);
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-10 ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white dark:bg-[#17212B] dark:text-[#fff] text-base-content min-h-full w-72 p-0">
          {/* Sidebar content here */}
          <div className="p-5">
            <div className="avatar mb-4">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-[16px] font-semibold">Arif Hossain</h4>
                <p className="text-blue-400">Set Emoji Status</p>
              </div>
              <div>
                {toggleArrow ? (
                  <SlArrowDown
                    className="cursor-pointer "
                    onClick={() => setToggleArrow(!toggleArrow)}
                  />
                ) : (
                  <SlArrowUp
                    className="cursor-pointer  "
                    onClick={() => setToggleArrow(!toggleArrow)}
                  />
                )}
              </div>
            </div>
          </div>
          <hr className=" mb-3" />
          {!toggleArrow && (
            <div>
              <h4 className="font-semibold flex items-center gap-6 px-5">
                <FaPlusCircle className="text-xl text-[#40A7E3]" />
                Add Account
              </h4>
              <hr className="my-3" />
            </div>
          )}

          <li>
            <Link className="px-5 rounded-none gap-5 font-semibold" to={"/"}>
              <LuUsers className="text-xl" />
              New Group
            </Link>
          </li>
          <li>
            <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
              <GrAnnounce className="text-xl" />
              New Channels
            </Link>
          </li>
          <li>
            <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
              <FaRegCircleUser className="text-xl" />
              Contacts
            </Link>
          </li>
          <li>
            <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
              <IoCallOutline className="text-xl" />
              Calls
            </Link>
          </li>
          <li>
            <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
              <CiBookmark className="text-xl" />
              Saved Messages
            </Link>
          </li>
          <li>
            <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
              <IoSettingsOutline className="text-xl" />
              Settings
            </Link>
          </li>
          <div
            className={`${
              !dark && `hover:bg-[#E8E9EB]`
            } flex items-center justify-between  `}
          >
            <li>
              <Link
                className="px-5 rounded-none  gap-5 font-semibold "
                to={"/"}
              >
                <IoMoonOutline className="text-xl" />
                Night Mode
              </Link>
            </li>
            <button className="pr-4" onClick={() => darkModeHandler()}>
              {dark && <IoSunny className="text-2xl" />}
              {!dark && <IoMoon className="text-2xl" />}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
