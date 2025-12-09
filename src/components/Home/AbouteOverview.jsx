import React from "react";
import { Link, useLocation } from "react-router";

const AbouteOverview = () => {
  const location = useLocation(); // Current URL path

  return (
    <section className="py-10 sm:py-16 px-4 bg-[#FEF9F5]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGES */}
        <div  data-aos="fade-right" className="relative w-full md:w-1/2 flex justify-center items-center h-[300px] sm:h-[380px] md:h-[450px]">
          {/* layer 1 */}
          <img
            src="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=870"
            alt="Layer1"
            className="absolute top-0 left-5 sm:left-10 w-1/2 sm:w-3/5 h-[200px] sm:h-[200px] md:h-90 object-cover rounded-lg shadow-lg"
          />
          {/* layer 2 */}
          <img
            src="https://images.unsplash.com/photo-1562762394-3acfba62a48e?q=80&w=870"
            alt="Layer2"
            className="absolute top-10 sm:top-10 left-24 sm:left-40 w-40 sm:w-56 md:w-80 h-[150px] md:h-60 sm:h-[180px] object-cover rounded-lg shadow-lg"
          />
          {/* layer 3 */}
          <img
            src="https://images.unsplash.com/photo-1560277090-46659724a489?q=80&w=870"
            alt="Layer3"
            className="absolute top-34 sm:top-60 left-12 sm:left-20 w-40 sm:w-56 md:w-80 h-[150px] md:h-60 sm:h-[160px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* TEXT AREA */}
        <div data-aos='fade-left' className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            About Our <span className="text-secondary">HomeDecor !</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base">
            Sociable on as carriage my position weddings raillery consider.
            Peculiar trifling absolute and wandered vicinity property yet.
          </p>

          <p className="text-gray-500 text-xs sm:text-sm">
            Started earnest brother believe an exposed so. He believing
            daughters if forfeited at furniture. Age again and stuff downs
            spoke.
          </p>

          {/* Show button only on Home page */}
          {location.pathname === "/" && (
            <Link
              to={"/aboute"}
              className="bg-primary text-white font-bold px-5 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-secondary transition-all duration-300 inline-block"
            >
              Read more...
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AbouteOverview;
