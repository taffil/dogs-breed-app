import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <div className="flex">
      <button
        className={`bg-[#6e77ee] rounded-md text-gray-100 px-3 border-none ${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
