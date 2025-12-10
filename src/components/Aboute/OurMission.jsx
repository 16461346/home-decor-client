import React from "react";

const OurMission = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="my-16 px-4 sm:px-8 lg:px-20"
    >
      {/* IMAGE GROUP */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full mx-auto justify-center items-center">
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          className="rounded-l-full w-3/4 md:w-1/2 object-cover"
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop"
          alt="Mission Image 1"
        />

        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          className="rounded-r-full w-2/4 md:w-1/3 object-cover"
          src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=870&auto=format&fit=crop"
          alt="Mission Image 2"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="my-10 text-center md:text-left">
        <h3
          data-aos="zoom-in"
          data-aos-duration="900"
          className="text-2xl sm:text-3xl md:text-3xl font-bold"
        >
          🏡 Our <span className="text-secondary">Mission</span>
        </h3>

        <div className="flex flex-col gap-4 py-4">
          <p
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="bg-blue-300 py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base"
          >
            At HomeDecor, our mission is to bring beauty, comfort, and
            personality to every home. We believe every space should reflect
            its owner’s unique taste while staying functional and modern.
          </p>

          <p
            data-aos="fade-up-left"
            data-aos-duration="1000"
            className="bg-amber-200 py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base"
          >
            From personalized consultations to on-site decoration, we aim to
            simplify the home styling process. Our team works closely with
            clients to ensure every corner shines with creativity and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
