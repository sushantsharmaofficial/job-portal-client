import React from "react";
import { Link } from "react-router-dom";
// icons
import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiType,
} from "react-icons/fi";

const Card = ({ data }) => {
  // destructuring data
  const {
    _id,
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postDate,
    jobDescription,
  } = data;
  return (
    <section className="card">
      <div className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="companylogo" width={80} height={80} />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg text-blue font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              Rs{""}
              {minPrice}-{maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {postDate}
            </span>
          </div>
          <p className="text-base text-primary/70">{jobDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
