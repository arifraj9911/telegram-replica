import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    fetch("chat_id_data.json")
      .then((res) => res.json())
      .then((data) => setChatData(data));
  }, []);
  return (
    <div className="w-[35%]  relative bg-white px-5 py-2">
      <div className="flex sticky bg-white top-0 items-center gap-6">
        <GiHamburgerMenu className="text-[22px] text-gray-400" />
        <input
          type="text"
          className="border w-full py-1 px-5 outline-none rounded-2xl bg-[#F1F1F1]"
          placeholder="Search..."
        />
      </div>
      <div className="max-h-screen mt-10 overflow-y-auto space-y-6">
        {chatData?.map((chat) => (
          <div key={chat.id} className="flex gap-4 ">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex justify-between  w-full">
              <div>
                <h4 className="text-lg font-bold">{chat?.sender?.name}</h4>
                <p className="text-sm">{chat?.message}</p>
              </div>
              <div className="text-gray-600 text-[14px] mt-1">Fri</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
