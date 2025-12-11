import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`cursor-pointer btn btn-primary p-4 rounded-lg text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
