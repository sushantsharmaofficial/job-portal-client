import React from "react";

const SalaryHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#141414] via-[#070707]  to-[#141414] py-24 mt-3 rounded flex items-center justify-center">
      <div>
        <h2 className="text-3xl  text-blue font-medium mb-1 text-center">
          Salary Estimate
        </h2>
        <p className=" text-white text-sm text-center">
          <a className=" hover:underline" href="/">
            Home
          </a>
          {"  "}/ Salary
        </p>
      </div>
    </div>
  );
};

export default SalaryHeader;
