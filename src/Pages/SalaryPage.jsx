import React, { useEffect, useState } from "react";
import SalaryHeader from "../Components/SalaryHeader";

const SalaryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => setSalary(data));
  }, [searchText]);

  // handle search
  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(filter);
    setSalary(filter);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto  max-w-screen-2xl xl:px-10 px-4">
      <SalaryHeader />
      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-gradient-to-tl from-[#000000]  to-[#3f3f3f] py-2 pl-3 border text-gray-200 focus:outline-none lg:w-6/12 mb-4 w-full rounded-l-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
          >
            Search
          </button>
        </div>
      </div>
      {/* salary display card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12 items-center">
        {salary.map((data, index) => (
          <div
            key={data.id}
            className=" bg-gradient-to-r from-[#1b1a1a] to-[#070707]   drop-shadow-2xl rounded-lg shadow px-4 py-8"
          >
            <h4 className="font-semibold text-white text-xl ">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
            <div className="flex flex-wrap gap-4 text-gray-300">
              <a href="/" className="underline">
                {" "}
                {data.status}
              </a>
              <a href="/" className="underline">
                {" "}
                {data.skills}
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SalaryPage;
