import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const BecomeSellerModal = ({ closeModal, isOpen }) => {
  // Hard-coded service data
  const serviceData = {
    name: "Luxury Home Decoration",
    category: "Home Decor",
    cost: 12000,
  };

  const districts = [
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
    "Bogra",
    "Comilla",
    "Jessore",
    "Patuakhali",
    "Cox's Bazar",
    "Tangail",
    "Narail",
    "Feni",
    "Narsingdi",
    "Barguna",
    "Habiganj",
    "Noakhali",
    "Meherpur",
    "Munshiganj",
    "Shariatpur",
    "Lakshmipur",
    "Magura",
    "Pabna",
    "Kushtia",
    "Sunamganj",
    "Brahmanbaria",
    "Jhenaidah",
    "Sirajganj",
    "Madaripur",
  ];

  const [bookingDate, setBookingDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={closeModal}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-gray-900 px-8 py-6 rounded-2xl shadow-2xl duration-300 ease-out">
          {/* Title */}
          <DialogTitle className="text-2xl font-extrabold text-center mb-4 text-white tracking-wide underline underline-offset-4 decoration-primary">
            Review Before Booking
          </DialogTitle>

          {/* Info Section */}
          <div className="space-y-4 mt-4">
            <p className="text-gray-200 text-lg font-semibold">
              Decoration
              <span className="ml-2 text-primary font-bold px-2 py-0.5 bg-primary/20 rounded-md">
                {serviceData.name}
              </span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Category
              <span className="ml-2 text-pink-300 font-bold px-2 py-0.5 bg-pink-600/20 rounded-md">
                {serviceData.category}
              </span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Total Cost
              <span className="ml-2 text-green-300 font-extrabold px-2 py-0.5 bg-red-200/20 rounded-md">
                {serviceData.cost} BDT
              </span>
            </p>

            {/* Booking Inputs */}
            <div className="flex flex-col gap-4 mt-4">
              {/* Date */}
              <div className="flex flex-col">
                <label className="text-gray-200 font-semibold mb-1">
                  Booking Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-primary focus:ring-0 text-black bg-white"
                />
              </div>

              {/* District */}
              <div className="flex flex-col">
                <label className="text-gray-200 font-semibold mb-1">
                  District
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-primary focus:ring-0 text-black bg-white"
                >
                  <option value="">Select District</option>
                  {districts.map((dist, i) => (
                    <option key={i} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mt-6 justify-between gap-2">
            <button
              type="button"
              className="w-[48%] py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md transition"
              onClick={() =>
                console.log({
                  selectedLocation,
                  bookingDate,
                  service: serviceData.name,
                  category: serviceData.category,
                  cost: serviceData.cost,
                })
              }
            >
              Process
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="w-[48%] py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold shadow-md transition"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default BecomeSellerModal;
