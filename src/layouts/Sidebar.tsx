import SidebarIcon from "../components/SidebarIcon";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiMoonStars } from "react-icons/pi";
import dog from "../assets/icons/Dog.png";

const Sidebar = () => {
  return (
    <div className="left-0 bottom-0 top-0 fixed bg-red-500 text-gray-700 shadow-2xl xs:hidden">
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
