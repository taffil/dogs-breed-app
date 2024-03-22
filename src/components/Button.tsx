import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <div className="flex">
      <button
        className={`bg-indigo-600 rounded-md text-sm font-semibold text-white px-3 hover:bg-indigo-500
        focus-visible:outline-indigo-600 ${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
