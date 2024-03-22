import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error?: string;
}

const Input: FC<InputProps> = ({ name, error, className, ...props }) => {
  return (
    <div className="flex flex-col">
      <input
        className={`py-2 px-3 rounded-md bg-gray-50 outline-none focus:border-[1px] focus:border-indigo-600 placeholder:text-gray-400 text-gray-700 border-[1px] border-gray-400 ${
          error ? "border-error focus:border-error" : ""
        } ${className}`}
        name={name}
        {...props}
      />
      <span className="text-sm text-error italic self-end">
        {error ? `${error}` : ""}
      </span>
    </div>
  );
};

export default Input;
