import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-portal-server-97fe.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" max-w-2xl container mx-auto lg:px-10 px-4">
      {jobs.map((job) => (
        <div key={job._id}></div>
      ))}
    </div>
  );
};

export default JobDetails;
