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
import { LuUserPlus, LuUsers } from "react-icons/lu";
import { SlArrowDown, SlArrowUp, SlQuestion } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./NavbarDrawer.css";

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
          <div className="p-5 bg-[#2876a3] border-b dark:border-b-[#101921] lg:border-b-gray-300 text-white lg:text-black lg:bg-white dark:bg-[#17212B] dark:text-white">
            <div className="flex  justify-between items-start">
              <div className="avatar mb-4">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <button
                className="lg:hidden mt-1"
                onClick={() => darkModeHandler()}
              >
                {dark && <IoSunny className="text-2xl" />}
                {!dark && <IoMoon className="text-2xl" />}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-[16px] font-semibold">Arif Hossain</h4>
                <p className="text-gray-300 lg:text-blue-400">
                  Set Emoji Status
                </p>
              </div>
              <div className="mr-[6px] lg:mr-0">
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
          {/* <hr className=" mb-3 hidden lg:flex  my-4" /> */}
          {!toggleArrow && (
            <div className="mt-3 mb-1 border-b pb-3 dark:border-b-[#101921]">
              <h4 className="font-semibold flex items-center gap-5 px-5">
                <FaPlusCircle className="text-xl text-[#40A7E3]" />
                Add Account
              </h4>
            </div>
          )}

          <div className="pb-2">
            <li className="border-b dark:border-b-[#101921] lg:hidden pb-1">
              <Link className="px-5 rounded-none gap-5 font-semibold" to={"/"}>
                <LuUsers className="text-xl" />
                My Profile
              </Link>
            </li>
            <li className="pt-1">
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
              } lg:flex items-center justify-between hidden`}
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
          </div>

          <div className="lg:hidden  border-t dark:border-t-[#101921] py-2">
            <li>
              <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
                <LuUserPlus className="text-xl" />
                Invite Friends
              </Link>
            </li>
            <li>
              <Link className="px-5 rounded-none gap-5 font-semibold " to={"/"}>
                <SlQuestion className="text-xl" />
                Telegram Features
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
