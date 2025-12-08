import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GrMap, GrVulnerability } from "react-icons/gr";
import { Link } from "react-router";

const Banner = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673203734691-cdebcf12f003?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1716999684556-f2f310f27e3a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <div className="relative w-full h-[500px]">
              <img
                src={img.src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className=" bg-opacity-30 p-8 md:p-16 w-full max-w-4xl mx-auto md:ml-20 rounded-lg">
                <h2 className=" text-left text-white text-3xl md:text-5xl font-bold mb-6">
                  Let us do the beauty design, that's you never seen before !
                </h2>

                <div className="flex flex-wrap gap-4">
                  <Link to="/coverage">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-secondary hover:shadow-lg transition shadow-md">
                      <GrMap /> Coverage area
                    </button>
                  </Link>
                  <Link to="/aboute">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-secondary hover:shadow-lg transition shadow-md">
                      <GrVulnerability /> Aboute us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
