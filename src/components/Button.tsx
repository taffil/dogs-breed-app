import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <button
      className={`bg-indigo-600 disabled:bg-gray-600 disabled:opacity-65 rounded-md text-sm font-semibold text-white px-3 hover:bg-indigo-500 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
