import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const PurchaseModal = ({ closeModal, isOpen }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={closeModal}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-md bg-gray-900 px-8 py-6 rounded-2xl shadow-2xl 
          duration-300 ease-out data-closed:opacity-0 data-closed:scale-95"
        >
          {/* Title */}
          <DialogTitle
            as="h3"
            className="text-2xl font-extrabold text-center mb-4 text-white tracking-wide
             underline underline-offset-4 decoration-primary"
          >
            Review Before Booking
          </DialogTitle>

          {/* Info Section */}
          <div className="space-y-4 mt-4">

            <p className="text-gray-200 text-lg font-semibold">
              Decoration:
              <span
                className="ml-2 text-primary font-bold px-2 py-0.5 bg-primary/20 rounded-md"
              >
                Dynamic Title Here
              </span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Category:
              <span
                className="ml-2 text-pink-300 font-bold px-2 py-0.5 bg-pink-600/20 rounded-md"
              >
                Home Decor
              </span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Price:
              <span
                className="ml-2 text-green-300 font-extrabold px-2 py-0.5 bg-red-200/20 rounded-md"
              >
                $990.00
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex mt-10 justify-between">
            <button
              type="button"
              className="w-[48%] py-3 rounded-xl bg-blue-500 hover:bg-blue-600 
              text-white font-bold shadow-md transition"
            >
              Pay Now
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="w-[48%] py-3 rounded-xl bg-red-500 hover:bg-red-600 
              text-white font-bold shadow-md transition"
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
