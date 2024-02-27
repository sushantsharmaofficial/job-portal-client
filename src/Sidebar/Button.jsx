import React from "react";

const Button = ({ onCLickHandler, value, title }) => {
  return (
    <button
      onClick={onCLickHandler}
      value={value}
      className={`px-4 py-1 border text-base hover:bg-blue hover:text-white focus:bg-blue focus:text-white`}
    >
      {title}
    </button>
  );
};

export default Button;
