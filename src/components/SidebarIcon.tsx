import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  containerStyle?: string;
  textStyle?: string;
  to?: string;
}

const SidebarIcon: FC<Props> = ({
  icon,
  text,
  containerStyle,
  textStyle,
  to,
  ...props
}) => {
  return to ? (
    <Link
      to={to}
      className={`flex flex-row items-center px-4 py-2 my-4 ${containerStyle}`}
      {...props}
    >
      {icon}
      <p className={`pr-4 pl-6 font-semibold text-l ${textStyle}`}>{text}</p>
    </Link>
  ) : (
    <div
      className={`flex flex-row items-center px-4 py-2 my-4 hover:cursor-pointer ${containerStyle}`}
    >
      {icon}
      <p className={`pr-4 pl-6 font-semibold text-l ${textStyle}`}>{text}</p>
    </div>
  );
};

export default SidebarIcon;
