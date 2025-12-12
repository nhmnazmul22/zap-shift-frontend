import React from "react";

const InputBox = ({
  label = "",
  placeholder = "",
  type = "text",
  className = "",
  labelClassName = "",
  containerClassName = "",
  isError = false,
  errorMessage = "Something went wrong!",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 ${containerClassName}`}>
      <label
        className={`label text-sm font-semibold text-base-200 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`input bg-transparent text-base border border-[#CBD5E1] outline-0 focus-within:ring-1
                     ring-[#94A3B8] ring-offset-1 transition-all duration-300 w-full ${className} `}
        placeholder={placeholder}
        {...props}
      />
      {isError && <span className="text-sm text-red-600">{errorMessage}</span>}
    </div>
  );
};

export default InputBox;
