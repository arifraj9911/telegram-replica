import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";

const Main = () => {
  return (
    <div className="flex gap-6 ">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
};

export default Main;
