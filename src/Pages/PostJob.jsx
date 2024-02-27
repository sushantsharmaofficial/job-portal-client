import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const PostJob = () => {
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
    fetch("https://job-portal-server-97fe.onrender.com/post-job", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Job posted successfully");
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
      <div className="bg-[#fafafa] py-10 px-4 lg:px-16 shadow ">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-7">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title:</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle", { required: true })}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name:</label>
              <input
                type="text"
                placeholder="Eg: Google"
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
                placeholder="Eg: $20k"
                {...register("minPrice", { required: true })}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary:</label>
              <input
                type="text"
                placeholder="Eg: $130k"
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
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location:</label>
              <input
                type="text"
                placeholder="Eg: New York"
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
                placeholder="Eg: 2024/01/01"
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
                <option value="">Choose your experience</option>
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
              defaultValue={selectedOptions}
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
                placeholder="Eg: Paste your url here https://www.google.com/img1.jpg"
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
                <option value="">Choose your job type</option>
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
              placeholder="Write a description of your job here"
              rows={6}
              {...register("jobDescription", { required: true })}
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:texxtgray-500"
            ></textarea>
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By:</label>
            <input
              type="email"
              placeholder="Your email address"
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

export default PostJob;
