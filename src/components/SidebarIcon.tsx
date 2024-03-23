import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  containerStyle?: string;
  textStyle?: string;
  to?: string;
  callback?: () => void;
}

const SidebarIcon: FC<Props> = ({
  icon,
  text,
  containerStyle,
  textStyle,
  to,
  callback,
  ...props
}) => {
  return to ? (
    <Link
      to={to}
      className={`flex flex-row items-center px-4 py-3 my-1 hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-105 transition-all ${containerStyle}`}
      {...props}
    >
      {icon}
      <p className={`pr-4 pl-6 font-semibold text-l ${textStyle}`}>
        {text}
      </p>
    </Link>
  ) : (
    <button
      className={`flex flex-row items-center px-4 dark:py-1 py-2.5 my-1 hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-105 transition-all ${containerStyle}`}
      onClick={callback}
    >
      {icon}
      <p className={`dark:hidden pr-4 pl-6 font-semibold text-l ${textStyle}`}>
        Dark Mode
      </p>
      <p className={`hidden dark:block pr-4 pl-6 font-semibold text-l ${textStyle}`}>
        Light Mode
      </p>
    </button>
  );
};

export default SidebarIcon;
