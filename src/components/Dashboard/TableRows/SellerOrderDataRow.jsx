import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SellerOrderDataRow = ({ booking, refetch }) => {
  const axiosSecure = useAxiosSecure();

  if (!booking) return null;

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;

    try {
      const res = await axiosSecure.patch(
        `/bookings/${booking._id}/status`,
        { status: newStatus }
      );

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: `Order status changed to "${newStatus}"`,
          timer: 1500,
          showConfirmButton: false,
        });
        refetch && refetch();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update status", "error");
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.bookingDate}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.startTime} - {booking.endTime}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.name}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.customer}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.phone}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        ${booking.price}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.transactionId ? "Paid" : "Unpaid"}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        {booking.division}/{booking.district}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        <select
          value={booking.status}
          onChange={handleStatusChange}
          className="p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md"
        >
          <option value="Decorator-assigned">Decorator Assigned</option>
          <option value="Planning Phase">Planning Phase</option>
          <option value="Materials Prepared">Materials Prepared</option>
          <option value="On the Way to Venue">On the Way to Venue</option>
          <option value="Setup in Progress">Setup in Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default SellerOrderDataRow;
