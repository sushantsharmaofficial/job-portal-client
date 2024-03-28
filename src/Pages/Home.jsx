import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "../Components/Jobs";
import Sidebar from "../Sidebar/Sidebar";
import NewsLetter from "../Components/NewsLetter";
import Loader from "../Loader/Loader";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(true);
    fetch("https://job-portal-server-97fe.onrender.com/all-jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
    setIsLoading(false);
  }, []);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //***** */ filter jobs based on title****************

  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //********* */ radioBtn based filter************

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //****** */ ----button based filter---------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  //********* */ calculate total number of pages********index range

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // *******function for next page*************

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // *******function for previous page*************

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //********** */ main function *************

  const filteredData = (jobs, selected, query) => {
    let FilterJobs = jobs;

    //******* */ filtering Input items
    if (query) {
      FilterJobs = filteredItems;
    }
    //****** */ catrgory filtering

    if (selected) {
      FilterJobs = FilterJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postDate >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }
    //******  slice the data based on current page */

    const { startIndex, endIndex } = calculatePageRange();
    FilterJobs = FilterJobs.slice(startIndex, endIndex);

    return FilterJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div className=" ">
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className=" md:grid grid-cols-4 gap-8 lg:px-20 px-4 py-12">
        {/* left sidebar filters */}
        <div className="bg-gradient-to-tl from-[#141414]  to-[#070707] drop-shadow-2xl p-4 rounded-3xl h-full shadow">
          <Sidebar handleClick={handleClick} handleChange={handleChange} />
        </div>
        {/* job cards middle */}
        {}
        <div className="bg-gradient-to-r from-[#141414] via-[#070707]  to-[#141414] col-span-2  drop-shadow-2xl p-4 rounded-3xl shadow-3xl ">
          {isLoading ? (
            <div className="left-0">
              <Loader />
            </div>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-2xl text-white font-bold mb-2 ">
                {result.length} Jobs
              </h3>
              <p className="text-white">No Jobs Found</p>
            </>
          )}
          {/* pagination here */}
          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8 text-white">
              <button
                className="hover:underline"
                onClick={previousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="mx-2">
                page {currentPage} of
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                className="hover:underline"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
        {/* right side resume uploader */}
        <div className="bg-gradient-to-tl from-[#070707]  to-[#141414] p-4 rounded-3xl shadow h-full">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
