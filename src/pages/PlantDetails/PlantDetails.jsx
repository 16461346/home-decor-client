import Container from "../../components/Shared/Container";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const PlantDetails = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const { id } = useParams();

  const { data: serviceDetails = {}, isLoading } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/decorations/${id}`
      );
      return result.data;
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [phone, setPhone] = useState("");

  // SAVE BOOKING
  const { mutateAsync: saveBooking, isPending: bookingLoading } = useMutation({
    mutationFn: async (bookingData) => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/userBooks`,
        bookingData
      );
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Booking Successful!",
      });
    },
    onError: (error) => {
      if (error.response?.status === 409) {
        Swal.fire({
          icon: "warning",
          title: "Already Booked!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Booking Failed!",
        });
      }
    },
  });

  const closeModal = () => setIsOpen(false);

  const handleDivisionChange = (e) => {
    const value = e.target.value;
    setSelectedDivision(value);
    const divisionData = data.find((item) => item.division === value);
    setDistrictList(divisionData ? divisionData.districts : []);
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

  const handleOpenModal = () => {
    if (
      !selectedDivision ||
      !selectedDistrict ||
      !bookingDate ||
      !startTime ||
      !endTime ||
      !phone
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all booking fields",
      });
      return;
    }
    setIsOpen(true); // Open modal first
  };

  const handleConfirmBooking = async () => {
    const bookingData = {
      decorationId: serviceDetails?._id,
      decorationName: serviceDetails?.name,
      decorationImage: serviceDetails?.image,
      decorationCategory: serviceDetails?.category,
      decorationPrice: serviceDetails?.price,
      decorationStatus: serviceDetails?.status || "Available",
      decorationRatings: serviceDetails?.rattings || 0,
      bookingDetails: {
        division: selectedDivision,
        district: selectedDistrict,
        bookingDate,
        startTime,
        endTime,
        contactNumber: phone,
      },
      userInfo: {
        userName: user?.displayName,
        userEmail: user?.email,
        userPhoto: user?.photoURL,
        userUID: user?.uid,
      },
      bookingStatus: "Pending",
      paymentStatus: "Unpaid",
      bookedAt: new Date(),
    };

    await saveBooking(bookingData);
    setIsOpen(false); // Close modal after booking
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <div className="max-w-full my-10 mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex mx-4 flex-col md:flex-row">
          {/* LEFT IMAGE */}
          <div className="w-full p-6 md:w-[65%] h-auto">
            <img
              src={serviceDetails?.image}
              alt="Decoration"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* RIGHT DETAILS */}
          <div className="w-full md:w-[35%] py-10 pr-4 flex flex-col justify-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {serviceDetails?.name}
              <span className="text-sm text-green-700 font-bold ml-2">
                {serviceDetails?.status}
              </span>
            </h1>

            <h2 className="mb-3 text-xl text-black font-bold">
              Category:
              <span className="text-primary text-lg font-bold ml-1">
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

            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-900">
                Full package price:
                <span className="text-2xl ml-1">${serviceDetails?.price}</span>
              </span>
            </div>

            {/* BOOKING FORM */}
            <div className="flex flex-col gap-4 mb-14 w-full">
              {/* Division / District */}
              <div className="flex md:flex-row items-center gap-4 w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-black font-semibold mb-1">
                    Division
                  </label>
                  <select
                    value={selectedDivision}
                    onChange={handleDivisionChange}
                    className="w-full border text-black border-primary rounded-lg p-2"
                  >
                    <option value="">Select Division</option>
                    {data.map((dist, i) => (
                      <option key={i} value={dist.division}>
                        {dist.division}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-black font-semibold mb-1">
                    District
                  </label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedDivision}
                    className="w-full border text-black border-primary rounded-lg p-2"
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

              {/* Booking Date / Phone */}
              <div className="flex justify-between gap-4">
                <div className="flex-1 text-black flex flex-col">
                  <label className="font-semibold">Booking Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="border border-primary rounded-lg p-2"
                  />
                </div>
                <div className="flex-1 text-black flex flex-col">
                  <label className="font-semibold">Phone Number</label>
                  <input
                    type="number"
                    value={phone}
                    placeholder="01XXXXXXXXX"
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-primary rounded-lg p-2"
                  />
                </div>
              </div>

              {/* Start / End Time */}
              <div className="flex text-black gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="font-semibold">Start Time</label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="border border-primary rounded-lg p-2"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-semibold">End Time</label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="border border-primary rounded-lg p-2"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleOpenModal}
              disabled={bookingLoading}
              className="bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {bookingLoading ? "Booking..." : "Book Now"}
            </button>
            
            <PurchaseModal
              data={{
                ...serviceDetails,
                division: selectedDivision,
                district: selectedDistrict,
                bookingDate,
                startTime,
                endTime,
                phone,
                user,
              }}
              closeModal={closeModal}
              isOpen={isOpen}
              confirmBooking={handleConfirmBooking} 
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlantDetails;
