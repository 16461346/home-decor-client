import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateUserRoleModal = ({ isOpen, closeModal, role, email, onRoleUpdated }) => {
  const [updatedRole, setUpdatedRole] = useState(role);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setUpdatedRole(role);
  }, [role, isOpen]);

 const handleUpdateRole = async () => {
  try {
    setLoading(true);
    const res = await axiosSecure.patch(
      `${import.meta.env.VITE_API_URL}/users/update-role`,
      { email, role: updatedRole }
    );
    
    if (res.data.success) {
      toast.success(res.data.message);
      if (onRoleUpdated) onRoleUpdated(updatedRole);
      closeModal();
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to update role");
  } finally {
    setLoading(false);
  }
};


  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white text-black p-6 shadow-xl">
            <DialogTitle className="text-lg font-semibold text-black">
              Update User Role
            </DialogTitle>

            <select
              value={updatedRole}
              onChange={(e) => setUpdatedRole(e.target.value)}
              disabled={loading}
              className="w-full my-4 border border-gray-200 rounded-xl px-3 py-3"
            >
              <option value="customer">Customer</option>
              <option value="decorator">Decorator</option>
              <option value="admin">Admin</option>
            </select>

            <div className="flex mt-4 justify-around">
              <button
                onClick={handleUpdateRole}
                disabled={loading}
                className="inline-flex justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update"}
              </button>

              <button
                onClick={closeModal}
                className="inline-flex justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateUserRoleModal;
