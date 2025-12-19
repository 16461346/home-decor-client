import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useRole from "../../hooks/useRole";

const BecomeSellerModal = ({ closeModal, isOpen }) => {
  const divisionData = useLoaderData();
  const { user } = useAuth();
  const [role]=useRole();
  console.log(role);

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [phone, setPhone] = useState("");

  // Handle Division Change
  const handleDivisionChange = (e) => {
    const value = e.target.value;
    setSelectedDivision(value);

    const found = divisionData.find((d) => d.division === value);

    if (found) {
      setDistrictList(found.districts);
    } else {
      setDistrictList([]);
    }

    setSelectedDistrict("");
  };

  // Process Button Click Handler

  const handleProcess = async () => {
    if (!selectedDivision || !selectedDistrict || !phone) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all fields!",
        icon: "error",
      });
      return;
    }

    const requestData = {
      name: user?.displayName,
      email: user?.email,
      division: selectedDivision,
      district: selectedDistrict,
      phone,
      role
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/decorator-requests`,
        requestData
      );

      if (res.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your decorator request has been sent. Please wait for admin approval.",
          icon: "success",
        });

        closeModal();
      }
    } catch (error) {
      if (error.response?.status === 409) {
        Swal.fire({
          title: "Already Requested",
          text: error.response.data.message,
          icon: "warning",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={closeModal}
    >
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-gray-900 px-8 py-6 rounded-2xl shadow-2xl">
          <DialogTitle className="text-2xl font-extrabold text-center mb-4 text-white underline underline-offset-4 decoration-primary">
            Review Before Booking
          </DialogTitle>

          {/* User Info */}
          <div className="space-y-2 mt-4">
            <p className="text-gray-200 text-lg font-semibold">
              Name : <span className="text-primary">{user?.displayName}</span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Email : <span className="text-blue-300">{user?.email}</span>
            </p>
          </div>

          {/* Input Section */}
          <div className="mt-6 space-y-4">
            {/* Division + District */}
            <div className="flex gap-4">
              {/* Division */}
              <div className="flex flex-col w-1/2">
                <label className="text-gray-200 font-semibold mb-1">
                  Division
                </label>
                <select
                  value={selectedDivision}
                  onChange={handleDivisionChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-black bg-white"
                >
                  <option value="">Select Division</option>
                  {divisionData.map((item, i) => (
                    <option key={i} value={item.division}>
                      {item.division}
                    </option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div className="flex flex-col w-1/2">
                <label className="text-gray-200 font-semibold mb-1">
                  District
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  disabled={!selectedDivision}
                  className="w-full border border-gray-300 rounded-md p-2 text-black bg-white disabled:bg-gray-200"
                >
                  <option value="">Select District</option>
                  {districtList.map((dist, i) => (
                    <option key={i} value={dist.name}>
                      {dist.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-gray-200 font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01XXXXXXXXX"
                className="w-full border border-gray-300 rounded-md p-2 text-black bg-white"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mt-6 justify-between gap-2">
            <button
              type="button"
              className="w-[48%] py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md"
              onClick={handleProcess}
            >
              Send Request
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="w-[48%] py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold shadow-md"
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
