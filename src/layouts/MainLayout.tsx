import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="md:ml-[190.844px] flex flex-1 flex-col pb-[65px] md:pb-0 justify-between">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
