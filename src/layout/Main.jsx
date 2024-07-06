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

      <div className="flex-1">
        <div className="fixed border border-gray-400 w-full bg-white p-3  top-0">
          <h2>Name</h2>
        </div>
        <div
          style={{
            backgroundImage: "url(https://i.ibb.co/5MyL7d1/telegram.png)",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" w-full flex-grow flex flex-col-reverse max-h-full overflow-y-scroll px-6 py-20 "
        >
          <Outlet></Outlet>
        </div>
        <div className="fixed w-full bg-white   bottom-0">
          <input
            type="text"
            name=""
            placeholder="text..."
            className="border border-green-500 p-3 w-full"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
