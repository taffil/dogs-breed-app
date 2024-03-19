import { Link } from "react-router-dom";
import { ReactNode } from "react";

const SidebarIcon = ({
  icon,
  text,
  to,
}: {
  icon: ReactNode;
  text: string;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className="flex flex-row items-center px-4 py-2 my-4 hover:bg-gray-700 group"
    >
      <div>{icon}</div>
      <span className="pr-4 pl-6 font-medium group-hover:scale-110 transition-transform">
        {text}
      </span>
    </Link>
  );
};

export default SidebarIcon;
