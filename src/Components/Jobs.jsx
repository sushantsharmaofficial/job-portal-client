import React from "react";

const Jobs = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-2xl text-white font-bold mb-2">
          {result.length} Jobs
        </h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Jobs;
