import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="md:ml-[190.844px] flex-1 pb-24">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
