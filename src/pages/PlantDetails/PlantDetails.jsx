import Container from "../../components/Shared/Container";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PlantDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const {
    data: serviceDetails = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/decorations/${id}`
      );
      return result.data;
    },
  });
  console.log(serviceDetails);

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
  const getRatingLabel = (rating) => {
    if (!rating || rating === 0) return "No Rating Yet";
    if (rating >= 5) return "Top Rated";
    if (rating >= 4.5) return "Excellent";
    if (rating >= 4) return "Very Good";
    if (rating >= 3) return "Good";
    if (rating >= 2) return "Average";
    return "Poor";
  };

  return (
    <Container>
      <div className="max-w-full my-10 mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* LEFT IMAGE 70% */}
          <div className="w-full p-6 md:w-[65%] h-auto">
            <img
              src={serviceDetails?.image}
              alt="Decoration"
              className="w-full h-full  object-cover rounded-lg"
            />
          </div>

          {/* RIGHT DETAILS 30% */}
          <div className="w-full md:w-[35%] py-10 pr-4 flex flex-col justify-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {serviceDetails?.name}
              <span className="text-sm text-green-700 font-bold">
                {serviceDetails?.status}
              </span>
            </h1>
            <h2 className="mb-3 text-xl text-black  font-bold">
              Category:{" "}
              <span className="text-primary text-lg font-bold">
                {serviceDetails?.category}
              </span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {serviceDetails?.description}
            </p>
            
            <div className="flex items-center mb-6">
              <span className="bg-green-500 text-white font-semibold px-2.5 py-0.5 rounded">
                {serviceDetails?.rattings || 0} ★
              </span>

              <span className="text-xs font-bold text-gray-500 ml-2">
                {getRatingLabel(serviceDetails?.rattings)}
              </span>
            </div>

            <div className="flex  items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-900">
                Full package price: <span className="text-2xl">${serviceDetails?.price}</span>
              </span>
            </div>

            {/* <p className="text-sm font-bold text-green-800 mb-5"> */}
              {/* Work completed within 2 days */}
            {/* </p> */}
            <div>
              <div className="flex flex-col gap-4 mb-14 w-full">
                {/* Division & District */}
                <div className="flex  md:flex-row items-center gap-4 w-full">
                  {/* Division */}
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold text-black mb-1">Division</label>
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
                    <label className="font-semibold text-black mb-1">District</label>
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
                    <label className="font-semibold text-black mb-1">Booking Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold text-black mb-1">Start Time</label>
                    <input
                      type="time"
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold text-black mb-1">End Time</label>
                    <input
                      type="time"
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                </div>
                 <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-semibold text-black mb-1">Contact Number</label>
                    <input
                      type="number"
                      className="w-full border border-primary rounded-lg p-2 outline-none focus:outline-primary focus:border-primary focus:ring-2 focus:ring-primary/80 text-black bg-white transition"
                      placeholder="01XXXXXXXXX"
                    />
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
