import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const UpdateJobs = () => {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postDate,
    experienceLevel,
    companyLogo,
    jobDescription,
    postedBy,
    skills,
    employmentType,
  } = useLoaderData();

  // select

  const [selectedOptions, setSelectedOptions] = useState(null);

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    fetch(`https://job-portal-server-97fe.onrender.com/update-job/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Job updated successfully");
        }
        reset();
      });
  };

  // creatable select

  const options = [
    { value: "react", label: "React" },
    { value: "Javascript", label: "Javascript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "C++", label: "C++" },
    { value: "Next", label: "Next" },
    { value: "mongoDB", label: "mongoDB" },
    { value: "Express", label: "Express" },
    { value: "laravel", label: "Laravel" },
  ];
  return (
    <div className="container mx-auto  max-w-screen-2xl xl:px-10 px-4">
      {/* form */}
      <div className="bg-gradient-to-r from-[#141414] via-[#070707] to-[#141414] drop-shadow-2xl p-4 rounded-3xl   py-10 px-4 lg:px-16 shadow ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" space-y-7 text-white"
        >
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title:</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle", { required: true })}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name:</label>
              <input
                type="text"
                defaultValue={companyName}
                {...register("companyName", { required: true })}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary:</label>
              <input
                type="text"
                defaultValue={minPrice}
                {...register("minPrice", { required: true })}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary:</label>
              <input
                type="text"
                defaultValue={maxPrice}
                {...register("maxPrice", { required: true })}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type:</label>
              <select
                {...register("salaryType", { required: true })}
                className="create-job-input"
              >
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location:</label>
              <input
                type="text"
                defaultValue={jobLocation}
                {...register("jobLocation", { required: true })}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date:</label>
              <input
                type="date"
                defaultValue={postDate}
                {...register("postDate", { required: true })}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level:</label>
              <select
                {...register("experienceLevel", { required: true })}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">NoExperience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work Remotely</option>
              </select>
            </div>
          </div>
          {/*  5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Set:</label>
            <CreatableSelect
              defaultValue={skills}
              onChange={setSelectedOptions}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>
          {/* 6th row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo:</label>
              <input
                type="url"
                defaultValue={companyLogo}
                {...register("companyLogo", { required: true })}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type:</label>
              <select
                {...register("employmentType", { required: true })}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Full-Time">Full-Time</option>
              </select>
            </div>
          </div>
          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description:</label>
            <textarea
              rows={6}
              defaultValue={jobDescription}
              {...register("jobDescription", { required: true })}
              className="w-full text-black/90 pl-3 py-1.5 focus:outline-none placeholder:text-gray-500"
            ></textarea>
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By:</label>
            <input
              type="email"
              defaultValue={postedBy}
              {...register("postedBy", { required: true })}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="my-5 block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJobs;
