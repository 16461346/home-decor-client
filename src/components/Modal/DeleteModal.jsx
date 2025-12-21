import { Dialog } from "@headlessui/react";

const DeleteModal = ({ isOpen, closeModal, handleDelete }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-base-100 p-6 rounded-xl w-96">
          <Dialog.Title className="text-lg font-bold">
            Cancel Booking?
          </Dialog.Title>

          <p className="mt-2 text-sm text-base-content">
            Are you sure you want to cancel this booking?
          </p>

          <div className="mt-4 flex justify-end gap-3">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded bg-gray-200 text-black"
            >
              No
            </button>

            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded bg-red-500 text-white"
            >
              Yes, Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeleteModal;
