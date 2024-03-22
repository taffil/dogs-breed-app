import SidebarIcon from "../components/SidebarIcon";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiMoonStars } from "react-icons/pi";
import dog from "../assets/icons/Dog.png";

const Sidebar = () => {
  return (
    <div className="bottom-0 md:left-0 md:top-0 xs:w-full fixed bg-gray-100 text-gray-700 shadow-2xl flex flex-row md:flex-col justify-around md:justify-start z-10">
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
