

"use client";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
