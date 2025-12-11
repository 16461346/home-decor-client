import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
;

const PurchaseModal = ({ closeModal, isOpen, data }) => {


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
        <DialogPanel className="w-full max-w-md bg-gray-900 px-8 py-6 rounded-2xl shadow-2xl duration-300 ease-out">
          <DialogTitle className="text-2xl font-extrabold text-center mb-4 text-white tracking-wide underline underline-offset-4 decoration-primary">
            Review Before Booking
          </DialogTitle>

          <div className="space-y-4 mt-4">
            <p className="text-gray-200 text-lg font-semibold">
              Decoration
              <span className="ml-2 text-primary font-bold px-2 py-0.5 bg-primary/20 rounded-md">
                {data.title || "Dynamic Title Here"}
              </span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Category
              <span className="ml-2 text-pink-300 font-bold px-2 py-0.5 bg-pink-600/20 rounded-md">
                {data.category || "Home Decor"}
              </span>
            </p>

            <p className="text-gray-200 text-lg font-semibold">
              Total Cost
              <span className="ml-2 text-green-300 font-extrabold px-2 py-0.5 bg-red-200/20 rounded-md">
                ${data.cost || "0.00"}
              </span>
            </p>

            {/* Booking Inputs */}
            

          </div>

          {/* Buttons */}
          <div className="flex mt-6 justify-between gap-2">
            <button
              type="button"
              className="w-[48%] py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md transition"
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

export default PurchaseModal;
