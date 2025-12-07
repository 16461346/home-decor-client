import Card from "./Card";
import Container from "../Shared/Container";
import Banner from "./Banner/Banner";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const Plants = () => {
  const text = "Beautiful minimal indoor decoration setup for modern home";

  return (
    <>
      <Banner />
      <Container>
        <div className="px-40">
          <section className="my-16">
            {/* Section Title */}
            <h2 className="text-4xl font-bold  mt-20 mb-6 text-left pl-4">
              Latest Design <span className="text-secondary">For You</span>
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto px-4">
              {/* Card 1 */}
              <div className="relative rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  className="w-full h-120 object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow">
                  <h3 className="text-lg font-semibold">Indoor Plant Setup</h3>

                  {/* Short Text (4 Words) */}
                  <p className="text-gray-600 text-sm">
                    {text.split(" ").slice(0, 4).join(" ")}...
                  </p>

                  {/* See More Button (Next Line) */}
                  <button className="text-primary font-semibold flex items-center gap-1 mt-1 hover:underline">
                    See more <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  className="w-full h-80 object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow">
                  <h3 className="text-lg font-semibold">Indoor Plant Setup</h3>

                  {/* Short Text (4 Words) */}
                  <p className="text-gray-600 text-sm">
                    {text.split(" ").slice(0, 4).join(" ")}...
                  </p>

                  {/* See More Button (Next Line) */}
                  <button className="text-primary font-semibold flex items-center gap-1 mt-1 hover:underline">
                    See more <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  className="w-full h-80 object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow">
                  <h3 className="text-lg font-semibold">Indoor Plant Setup</h3>

                  {/* Short Text (4 Words) */}
                  <p className="text-gray-600 text-sm">
                    {text.split(" ").slice(0, 4).join(" ")}...
                  </p>

                  {/* See More Button (Next Line) */}
                  <button className="text-primary font-semibold flex items-center gap-1 mt-1 hover:underline">
                    See more <IoIosArrowForward />
                  </button>
                </div>
              </div>
          
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Link
                className="my-10 w-40 bg-secondary text-black font-semibold py-2 rounded-lg text-center
               transition-all duration-300 hover:bg-secondary/80 hover:scale-105
               sm:w-44 md:w-48"
                to={"/services"}
              >
                See More...
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Plants;
