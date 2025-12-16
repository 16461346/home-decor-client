import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";

const PurchaseModal = ({ closeModal, isOpen, data, confirmBooking }) => {
  // Fetch available decorators
  const { data: DecoratorAvailable = [], isLoading } = useQuery({
    queryKey: ["DecoratorAvailable"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/Deco_Available`
      );
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Check if any decorator is available at the selected date and time
  const isDecoratorAvailable = DecoratorAvailable.some((decorator) => {
    // যদি ফিল্ডগুলো না থাকে, direct true
    if (!decorator.working_date || !decorator.start_time || !decorator.end_time) {
      return true;
    }

    const decoratorDate = decorator.working_date; 
    const decoratorStartTime = decorator.start_time; 
    const decoratorEndTime = decorator.end_time;     

    return (
      decoratorDate === data.bookingDate &&
      data.startTime >= decoratorStartTime &&
      data.endTime <= decoratorEndTime
    );
  });

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
          <DialogTitle className="text-2xl font-extrabold text-center mb-4 text-white tracking-wide underline underline-offset-4 decoration-primary">
            Review Before Booking
          </DialogTitle>

          <div className="space-y-3 mt-4 text-gray-200">
            <p><span className="font-semibold">Decoration:</span> {data.name || "N/A"}</p>
            <p><span className="font-semibold">Category:</span> {data.category || "N/A"}</p>
            <p><span className="font-semibold">Division:</span> {data.division || "N/A"}</p>
            <p><span className="font-semibold">District:</span> {data.district || "N/A"}</p>
            <p><span className="font-semibold">Booking Date:</span> {data.bookingDate || "N/A"}</p>
            <p><span className="font-semibold">Start Time:</span> {data.startTime || "N/A"}</p>
            <p><span className="font-semibold">End Time:</span> {data.endTime || "N/A"}</p>
            <p><span className="font-semibold">Phone:</span> {data.phone || "N/A"}</p>
            <p><span className="font-semibold">Total Cost:</span> ${data.price || "0.00"}</p>
          </div>

          {/* Buttons */}
          <div className="flex mt-6 justify-between gap-2">
            {isDecoratorAvailable ? (
              <button
                type="button"
                onClick={confirmBooking} // Booking POST হবে
                className="w-[48%] py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md transition"
              >
                Pay Now
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="w-[48%] py-3 rounded-xl bg-gray-500 text-white font-bold shadow-md cursor-not-allowed"
              >
                No Decorator Available
              </button>
            )}

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

export default PurchaseModal;
