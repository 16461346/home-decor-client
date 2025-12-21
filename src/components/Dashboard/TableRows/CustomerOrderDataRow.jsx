import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const CustomerOrderDataRow = ({ Sbooking }) => {
  const {
    Image,
    category,
    price,
    startTime,
    transactionId,
    endTime,
    name,
    status,
    bookingDate,
  } = Sbooking;

  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const closeModal = () => setIsOpen(false);

  const handleCancel = async () => {
    try {
      await axiosSecure.patch(
        `/bookings/cancel/${transactionId}`
      );

      Swal.fire("Cancelled!", "Your booking has been cancelled", "success");

      queryClient.invalidateQueries(["bookings"]);
      closeModal();
    } catch (err) {
      Swal.fire("Error!", "Cancel failed", "error");
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b bg-base-200">
        <img src={Image} className="h-10 rounded" />
      </td>

      <td className="px-5 py-5 border-b bg-base-200">{name}</td>
      <td className="px-5 py-5 border-b bg-base-200">{category}</td>
      <td className="px-5 py-5 border-b bg-base-200">${price}</td>
      <td className="px-5 py-5 border-b bg-base-200">{bookingDate}</td>
      <td className="px-5 py-5 border-b bg-base-200">{startTime}</td>
      <td className="px-5 py-5 border-b bg-base-200">{endTime}</td>
      <td className="px-5 py-5 border-b bg-base-200">{status}</td>

      <td className="px-5 py-5 border-b bg-base-200">
        <button
          disabled={status === "cancelled"}
          onClick={() => setIsOpen(true)}
          className="px-3 py-1 rounded bg-red-500 text-white disabled:opacity-40"
        >
          Cancel
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleCancel}
        />
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
