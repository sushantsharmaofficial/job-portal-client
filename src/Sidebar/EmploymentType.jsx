import React from "react";
import InputField from "../Components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2 text-blue">Type of Employment</h4>
      <div className="text-white">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Type
        </label>
        <InputField
          handleChange={handleChange}
          value="temprorary"
          title="Temprorary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-Time"
          name="test"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
