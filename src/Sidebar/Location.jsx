import React from "react";
import InputField from "../Components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2 text-blue">Location</h4>
      <div className="text-white">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="kathmandu"
          title="Kathmandu"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="janakpur"
          title="Janakpur"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="pokhara"
          title="Pokhara"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="bhaktapur"
          title="Bhaktapur"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
