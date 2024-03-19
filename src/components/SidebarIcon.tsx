import { Link } from "react-router-dom";
import { ReactNode } from "react";

const SidebarIcon = ({
  icon,
  text,
  to,
}: {
  icon: ReactNode;
  text: string;
  to?: string;
}) => {
  return to ? (
    <Link to={to} className="flex flex-row items-center px-4 py-2 my-4">
      {icon}
      <p className="pr-4 pl-6 font-normal text-l">{text}</p>
    </Link>
  ) : (
    <div className="flex flex-row items-center px-4 py-2 my-4 hover:cursor-pointer">
      {icon}
      <p className="pr-4 pl-6 font-normal text-l">{text}</p>
    </div>
  );
};

export default SidebarIcon;
