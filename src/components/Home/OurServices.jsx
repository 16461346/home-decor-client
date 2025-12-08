import React from "react";
import { MdOutlineDesignServices, MdEventAvailable } from "react-icons/md";
import { GiFlowerPot, GiHammerNails } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import { FaCouch } from "react-icons/fa";
import Container from "../Shared/Container";

const OurServices = () => {
  const services = [
    {
      icon: <MdOutlineDesignServices size={40} className="text-secondary" />,
      title: "Interior Design",
      p: "Transform your living spaces with modern and elegant interior designs.",
    },
    {
      icon: <GiFlowerPot size={40} className="text-secondary" />,
      title: "Garden Decoration",
      p: "Create beautiful and relaxing outdoor spaces for your home.",
    },
    {
      icon: <MdEventAvailable size={40} className="text-secondary" />,
      title: "Event Setup",
      p: "Professional decoration services for weddings, parties, and events.",
    },
    {
      icon: <FiSun size={40} className="text-secondary" />,
      title: "Lighting & Ambience",
      p: "Enhance your home with perfect lighting and cozy ambiance.",
    },
    {
      icon: <GiHammerNails size={40} className="text-secondary" />,
      title: "Home Renovation",
      p: "Upgrade your rooms with stylish and functional renovation solutions.",
    },
    {
      icon: <FaCouch size={40} className="text-secondary" />,
      title: "Furniture Arrangement",
      p: "Organize your furniture for both comfort and style.",
    },
  ];

  return (
    <Container>
      <div className="my-12 rounded-2xl bg-primary py-15 px-18">
        <div className="text-center py-6 text-white">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p>
            "Providing top-quality services to make your home beautiful and
            functional."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-lg shadow-lg hover:shadow-xl transition bg-gray-200"
            >
              {/* Circular Icon Box */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-400 mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h2>

              {/* Paragraph */}
              <p className="text-gray-500 text-center text-sm">{service.p}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurServices;
