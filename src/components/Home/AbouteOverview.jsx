import React from "react";

const AbouteOverview = () => {
  return (
    <div>
      <section className="py-16 px-4 bg-[#FEF9F5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Layered Images */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src=""
              alt="Layer 1"
              className="absolute top-0 left-10 w-3/4 rounded-lg shadow-lg"
            />
            <img
              src="/images/img2.jpg"
              alt="Layer 2"
              className="absolute top-10 left-0 w-3/4 rounded-lg shadow-lg"
            />
            <img
              src="/images/img3.jpg"
              alt="Layer 3"
              className="relative z-10 w-3/4 rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">About Our <span className="text-secondary">HomeDecor !</span> </h2>
            <p className="text-gray-700">
              Sociable on as carriage my position weddings raillery consider.
              Peculiar trifling absolute and wandered vicinity property yet.
            </p>
            <p className="text-gray-500 text-sm">
              Started earnest brother believe an exposed so. He believing
              daughters if forfeited at furniture. Age again and stuff downs
              spoke. Late hour new nay able fat each sell.
            </p>
            <button className="bg-primary text-white font-bold px-6 py-2 rounded-full hover:bg-secondary transition-all duration-300">
              Book Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbouteOverview;
