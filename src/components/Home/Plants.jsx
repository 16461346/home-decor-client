import Card from "./Card";
import Container from "../Shared/Container";
import Banner from "./Banner/Banner";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorPage from "../../pages/ErrorPage";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Plants = () => {
  const { data:services3=[], isError, isLoading } = useQuery({
    queryKey: ["services3"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/decorations`);
      return result.data;
    },
  });


  const topRated = [...services3].sort((a, b) => b.rattings - a.rattings).slice(0, 3);
  console.log(topRated);

  if (isError) return <ErrorPage />;
  if (isLoading) return <LoadingSpinner />;
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
                  className="relative rounded-sm overflow-hidden shadow-lg group"
                >
                  {/* IMAGE */}
                  <img
                    src={service?.image}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover 
           transition-all duration-300 group-hover:scale-105"
                    alt=""
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/25"></div>

                  {/* WHITE TEXT CARD — NO SCALE EFFECT */}
                  <div
                    className="absolute bottom-4 left-4 right-4 
                  bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow 
                  transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold">
                      {service?.name.split(" ").slice(0, 2).join(" ")}...
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-green-700 flex items-center  text-xs border px-1 rounded-2xl">
                        {service?.category || "N/A"}
                      </p>
                      <p className="flex items-center gap-1.5">
                        ⭐ {service?.rattings}.0
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {service?.description.split(" ").slice(0, 12).join(" ")}
                      ...
                    </p>
                    <Link
                      to={`/service/${service._id}`}
                      className="text-primary font-semibold flex items-center gap-1 mt-1"
                    >
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
