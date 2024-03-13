import React from "react";
import Button from "./Button";
import InputField from "../Components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onCLickHandler={handleClick} value="" title="Hourly" />
        <Button onCLickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onCLickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <div>
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
          value={30}
          title="Less than Rs 30K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="Less than Rs 50K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="Less than Rs 80K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={1000}
          title="Less than Rs 100K"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
