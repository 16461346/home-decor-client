import Container from "../../components/Shared/Container";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useLoaderData } from "react-router";

const PlantDetails = () => {
  const data = useLoaderData();

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [bookingDate, setBookingDate] = useState("");

  // Division change handler
  const handleDivisionChange = (e) => {
    const value = e.target.value;
    setSelectedDivision(value);

    const divisionData = data.find((item) => item.division === value);

    if (divisionData) {
      setDistrictList(divisionData.districts);
    } else {
      setDistrictList([]);
    }

    setSelectedDistrict("");
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

          {/* RIGHT DETAILS 30% */}
          <div className="w-full md:w-[35%] py-10 pr-4 flex flex-col justify-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Dynamic Title Here{" "}
              <span className="text-sm text-green-700 font-bold">
                Available
              </span>
            </h1>
            <h2 className="mb-3 text-xl font-bold">
              Category:{" "}
              <span className="text-primary text-lg font-bold">Home Decor</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              cupiditate fugit maxime numquam modi labore, quia ad accusamus
              voluptas ullam...afddfsadfsdfdsf
            </p>

            <div className="flex items-center mb-6">
              <span className="bg-green-500 text-white font-semibold px-2.5 py-0.5 rounded">
                4.5 ★
              </span>
              <span className="text-xs font-bold text-gray-500 ml-2">
                Top Rated
              </span>
            </div>

            <div className="flex  items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-900">
                Full package price: <span className="text-2xl">$899.00</span>
              </span>
            </div>

            <p className="text-sm font-bold text-green-800 mb-5">
              Work completed within 2 days
            </p>
            <div>
              <div className="flex flex-col gap-4 mb-14 w-full">
                {/* Division & District */}
                <div className="flex  md:flex-row items-center gap-4 w-full">
                  
                 

                  {/* Division */}
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold mb-1">Division</label>
                    <select
                      value={selectedDivision}
                      onChange={handleDivisionChange}
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                    >
                      <option value="">Select Division</option>
                      {data.map((dist, i) => (
                        <option key={i} value={dist.division}>
                          {dist.division}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                   <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold mb-1">District</label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      disabled={!selectedDivision}
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                    >
                      <option value="">Select District</option>
                      {districtList.map((dist, index) => (
                        <option key={index} value={dist.name}>
                          {dist.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date + Phone */}
                <div className="flex md:flex-row gap-4 mt-4 w-full">
                  {/* Date */}
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold mb-1">Booking Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold mb-1">Phone Number</label>
                    <input
                      type="number"
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </button>

            <PurchaseModal
              data={data}
              closeModal={closeModal}
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlantDetails;
