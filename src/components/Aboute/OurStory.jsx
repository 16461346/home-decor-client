import React from "react";

const OurStory = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="900"
      className="py-16 px-4 sm:px-8 lg:px-20 bg-base-100 text-base-content"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Text */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="md:w-1/2 space-y-4 text-center md:text-left"
        >
          <h2
            data-aos="zoom-in"
            data-aos-duration="900"
            className="text-3xl sm:text-3xl font-bold"
          >
            🏡 Our <span className="text-secondary">Story</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-700 dark:text-gray-300 text-sm sm:text-base"
          >
            It all started in 2022, when a small team of passionate designers
            noticed that people’s homes lacked personal touch and modern styling.
            Every visit to a client’s house inspired them to think: “Why can’t
            every home feel beautiful, cozy, and unique?” From a tiny studio in
            the heart of the city, HomeDecor was born.
          </p>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="md:w-1/2 flex justify-center"
        >
          <img
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1543726969-a1da85a6d334?q=80&w=936&auto=format&fit=crop"
            alt="Our Story"
          />
        </div>

      </div>
    </section>
  );
};

export default OurStory;
