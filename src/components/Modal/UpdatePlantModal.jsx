import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import UpdatePlantForm from "../Form/UpdatePlantForm";

const UpdatePlantModal = ({ setIsEditModalOpen, isOpen, plant }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsEditModalOpen(false)}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-white p-6 rounded-xl shadow-2xl border border-black">
          {/* Header */}
          <div className="flex justify-between border-b border-black pb-3 mb-4">
            <DialogTitle className="text-xl font-semibold text-black">
              Update Decoration Info
            </DialogTitle>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <UpdatePlantForm plant={plant} closeModal={() => setIsEditModalOpen(false)} />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default UpdatePlantModal;
