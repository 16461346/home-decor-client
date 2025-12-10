import Container from "../../components/Shared/Container";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";

const PlantDetails = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="max-w-full my-10 mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">

          {/* LEFT IMAGE 70% */}
          <div className="w-full p-6 md:w-[65%] h-auto">
            <img
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
              alt="Decoration"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
     { /* EXAMPLE demo side------ https://www.wedmegood.com/profile/WeddingGo-Company-25130184 */}
          {/* RIGHT DETAILS 30% */}
          <div className="w-full md:w-[35%] py-10 pr-4 flex flex-col justify-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Dynamic Title Here{" "}
              <span className="text-sm text-green-700 font-bold">Available</span>
            </h1>
            <h2 className="mb-3 text-xl font-bold">
              Category:{" "}
              <span className="text-primary text-lg font-bold">Home Decor</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              cupiditate fugit maxime numquam modi labore, quia ad accusamus
              voluptas ullam...
            </p>

            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white font-semibold px-2.5 py-0.5 rounded">
                4.5 ★
              </span>
              <span className="text-xs font-bold text-gray-500 ml-2">Top Rated</span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-900">
                Price: <span className="text-2xl">$899.00</span>
              </span>
            </div>

            <p className="text-sm font-bold text-green-800 mb-5">
              Work completed within 2 days
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </button>

            <PurchaseModal closeModal={closeModal} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlantDetails;
