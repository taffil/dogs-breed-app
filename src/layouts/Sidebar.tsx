import SidebarIcon from "../components/SidebarIcon";
import { IoInformationCircleOutline } from "react-icons/io5";
import dog from "../assests/icons/Dog.png";
import doghidden from "../assests/icons/DogHidden.png";

const Sidebar = () => {
  return (
    <div className="left-0 h-screen bg-gray-900 text-white sidebar-shadow transition-all">
      <SidebarIcon
        icon={
          <div>
            <img
              src={dog}
              className="w-[48px] hidden group-hover:block group-hover:scale-120 transition-transform"
            />
            <img
              src={doghidden}
              className="w-[48px] block group-hover:hidden group-hover:scale-120 transition-transform"
            />
          </div>
        }
        text={"Dogs"}
        to={"/"}
      />
      <SidebarIcon
        icon={<IoInformationCircleOutline size={48} />}
        text={"About"}
        to={"/about"}
      />
    </div>
  );
};

export default Sidebar;
