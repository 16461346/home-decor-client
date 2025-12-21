import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PurchaseModal = ({ closeModal, isOpen, data }) => {
  const { user } = useAuth();
  const {
    _id,
    name,
    category,
    price,
    division,
    district,
    bookingDate,
    startTime,
    endTime,
    phone,
    description,
    image,
    Decoration_Creator,
  } = data;
  
  const axiosSecure = useAxiosSecure();

  const handlePayment = async () => {
    const paymentInfo = {
      decorationId: _id,
      name,
      category,
      price,
      description,
      image,
      Decoration_Creator,
      division,
      district,
      bookingDate,
      startTime,
      endTime,
      phone,
      customer: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/create-checkout-session`,
      paymentInfo
    );
    window.location.href = data.url;
  };

  // Fetch available decorators filtered by division, district, bookingDate
  const {
    data: decoratorData = { available: false, decorators: [] },
    isLoading,
  } = useQuery({
    queryKey: [
      "availableDecorators",
      data.division,
      data.district,
      data.bookingDate,
    ],
    enabled: !!data.division && !!data.district && !!data.bookingDate,
    queryFn: async () => {
      const res = await axiosSecure.get(`/decorators/available`, {
        params: {
          division: data.division,
          district: data.district,
          bookingDate: data.bookingDate,
        },
      });
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  const isDecoratorAvailable = decoratorData.available;

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-20 focus:outline-none"
      onClose={closeModal}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />
      {/* Modal container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md sm:max-w-lg h-auto md:h-auto bg-gray-900 px-6 sm:px-8 py-6 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
          <DialogTitle className="text-2xl font-extrabold text-center mb-4 text-white tracking-wide underline underline-offset-4 decoration-primary">
            Review Before Booking
          </DialogTitle>

          <div className="space-y-3 mt-4 text-gray-200 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Decoration:</span> {name || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {category || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Division:</span>{" "}
              {division || "N/A"}
            </p>
            <p>
              <span className="font-semibold">District:</span>{" "}
              {district || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Booking Date:</span>{" "}
              {bookingDate || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Start Time:</span>{" "}
              {startTime || "N/A"}
            </p>
            <p>
              <span className="font-semibold">End Time:</span>{" "}
              {endTime || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {phone || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Total Cost:</span> $
              {price || "0.00"}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row mt-6 gap-3">
            {isDecoratorAvailable ? (
              <button
                type="button"
                onClick={handlePayment}
                className="w-full sm:w-[48%] py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md transition"
              >
                Pay Now
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="w-full sm:w-[48%] py-3 rounded-xl bg-gray-500 text-white font-bold shadow-md cursor-not-allowed"
              >
                No Decorator Available
              </button>
            )}

            <button
              type="button"
              onClick={closeModal}
              className="w-full sm:w-[48%] py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold shadow-md transition"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
