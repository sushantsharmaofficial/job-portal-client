import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      {/* upper part */}
      <div>
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>
        <p className=" text-primary/70 text-base mb-4">
          We are here to help you for your carrier as a begineer, Intermediate,
          and professional. so, feel free to contact.
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* lower part */}
      <div className="mt-20">
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className=" text-primary/70 text-base mb-4">
          If you are looking for work, it is helpful to distribute your CV as
          widely as possible to increase the chances of recruiters and employers
          finding you and eventually landing a job.
        </p>

        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload Your CV"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
