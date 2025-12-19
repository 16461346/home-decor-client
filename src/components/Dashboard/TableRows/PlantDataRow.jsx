import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdatePlantModal from "../../Modal/UpdatePlantModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const PlantDataRow = ({ inventory }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { _id, name, category, price, image } = inventory;

  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/decorations/${_id}`);
      toast.success("Plant deleted successfully");
      setIsDeleteOpen(false);
      queryClient.invalidateQueries(["AllDecorations"]); // ✅ Update the correct query
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete plant");
    }
  };

  return (
    <>
      <tr>
        {/* Image */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <img
            src={image}
            alt={name}
            className="h-10 w-14 object-cover rounded"
          />
        </td>

        {/* Name */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-black text-sm">
          {name}
        </td>

        {/* Category */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-black text-sm">
          {category}
        </td>

        {/* Price */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-black text-sm">
          ${price}
        </td>

        {/* Delete */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm"
          >
            Delete
          </button>

          <DeleteModal
            isOpen={isDeleteOpen}
            closeModal={() => setIsDeleteOpen(false)}
            onDelete={handleDelete}
          />
        </td>

        {/* Update */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => setIsEditOpen(true)}
            className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-sm"
          >
            Update
          </button>

          <UpdatePlantModal
            isOpen={isEditOpen}
            setIsEditModalOpen={setIsEditOpen}
            plant={inventory} 
          />
        </td>
      </tr>
    </>
  );
};

export default PlantDataRow;
