import SidebarIcon from "../components/SidebarIcon";

const Sidebar = () => {
  return (
    <div className="bottom-0 md:left-0 md:top-0 xs:w-full fixed bg-gray-100 dark:bg-gray-900 shadow-lg dark:shadow-gray-600 flex flex-row md:flex-col justify-around md:justify-start z-10 transition-colors">
      <SidebarIcon
        icon={<span className="text-[22px]">&#128054;</span>}
        text={"Dashboard"}
        to={"/"}
      />
      <SidebarIcon
        icon={
          <>
            <span className="text-[32px] hidden dark:block">&#x2600;</span>
            <span className="text-[22px] dark:hidden">&#10024;</span>
          </>
        }
        text={
          document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode"
        }
        callback={() => document.body.classList.toggle("dark")}
      />
    </div>
  );
};

export default Sidebar;
