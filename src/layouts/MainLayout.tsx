import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex bg-gray-800">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
