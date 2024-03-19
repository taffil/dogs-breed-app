import SidebarIcon from "../components/SidebarIcon";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiMoonStars } from "react-icons/pi";
import dog from "../assests/icons/Dog.png";

const Sidebar = () => {
  return (
    <div className="left-0 h-screen bg-gray-100 text-gray-700 sidebar-shadow">
      <SidebarIcon
        icon={<img src={dog} className="h-[28px]" />}
        text={"Dashboard"}
        to={"/"}
      />
      <SidebarIcon icon={<PiMoonStars size={28} />} text={"Dark Mode"} />
      <SidebarIcon
        icon={<IoInformationCircleOutline size={28} />}
        text={"About"}
        to={"/about"}
      />
    </div>
  );
};

export default Sidebar;
