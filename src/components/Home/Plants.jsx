import Card from "./Card";
import Container from "../Shared/Container";
import Banner from "./Banner/Banner";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const Plants = ({ data }) => {
  const topRated = [...data].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <>
      <Banner />
      <Container>
        <div
          data-aos="fade-up"
          className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40"
        >
          <section className="my-16">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-6 text-left pl-2 sm:pl-4">
              Latest Decoration <span className="text-secondary">ForYou</span>
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2">
              {/* Card (reusable structure) */}
              {topRated.slice(0, 3).map((service, i) => (
                <div
                  key={i}
                  className="relative rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={service?.image}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                    alt=""
                  />

                  <div className="absolute inset-0 bg-black/25"></div>

                  {/* Overlay Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow">
                    <h3 className="text-xl font-semibold ">
                      {service.name}{" "}
                      <span className="text-green-700 text-xs border px-1 rounded-2xl">
                        {service?.category || "N/A"}
                      </span>
                    </h3>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="-mt-0.5 h-5 w-5 text-yellow-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {service?.rating}
                    </p>

                    <p className="text-gray-600 text-sm">
                      {service?.description.split(" ").slice(0, 10).join(" ")}...
                    </p>

                    <Link to={`/service/${service?.id}`} className="text-primary font-semibold flex items-center gap-1 mt-1 hover:underline">
                      See more <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Link
                className="my-10 w-40 bg-secondary text-black font-bold py-2 rounded-lg text-center
                transition-all duration-300 hover:bg-secondary/80 hover:scale-105
                sm:w-44 md:w-48"
                to={"/services"}
              >
                More Decoration's
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Plants;
