import React from "react";
import InputField from "../Components/InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //*** CONVERT TO YYYY-MM-DD (string) */

  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2 text-blue">Job Posting Data</h4>
      <div className="text-white">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 Hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 Days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
