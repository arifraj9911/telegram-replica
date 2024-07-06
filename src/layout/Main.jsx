import { Link, Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="flex gap-6">
            <div className="w-1/3">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            </div>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;