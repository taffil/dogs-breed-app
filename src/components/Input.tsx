import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

const Input: FC<InputProps> = ({ name, className, ...props }) => {
  return (
    <input
      className={`py-2 px-3 rounded-md bg-gray-50 outline-none focus:border-[1px] focus:border-indigo-600 placeholder:text-gray-400 text-gray-700 border-[1px] border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:placeholder:text-gray-500 dark:text-gray-100 ${className}`}
      name={name}
      {...props}
    />
  );
};

export default Input;
