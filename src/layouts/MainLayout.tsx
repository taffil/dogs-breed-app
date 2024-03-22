import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex p-8 min-h-screen">
      <Sidebar />
      <div className="md:ml-[190.844px] flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
