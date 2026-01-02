import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DecoratorRequestRow = ({ request, refetch }) => {
  const { _id, name, email, phone, division, district, status } = request;
  const axiosSecure = useAxiosSecure();

  const handleApprove = async () => {
    const confirm = await Swal.fire({
      title: "Approve Decorator?",
      text: "This user will become a decorator",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve",
    });

    if (!confirm.isConfirmed) return;

    await axiosSecure.patch(
      `${import.meta.env.VITE_API_URL}/decorator-requests/approve/${_id}`
    );

    Swal.fire("Approved!", "Decorator approved successfully.", "success");
    refetch();
  };

  const handleReject = async () => {
    const confirm = await Swal.fire({
      title: "Reject Request?",
      text: "This request will be rejected",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Reject",
    });

    if (!confirm.isConfirmed) return;

    try {
      // JWT token পাঠানো হচ্ছে Authorization header এ
      const res = await axiosSecure.patch(
        `${import.meta.env.VITE_API_URL}/decorator-requests/reject/${_id}`,
        {}, // PATCH body খালি, শুধু token লাগবে
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            // এখানে তোমার JWT token থাকতে হবে
          },
        }
      );

      console.log("Reject Response:", res.data); // ✅ Debugging
      Swal.fire("Rejected!", "Request has been rejected.", "info");
      refetch(); // data update
    } catch (err) {
      console.error("Reject Error:", err.response?.data || err);
      Swal.fire("Error!", "Failed to reject request.", "error");
    }
  };

  return (
    <tr>
      <td className="px-5 py-4 border-b bg-white">
        <img
          src="https://i.ibb.co/2M7rtLk/user.png"
          alt="profile"
          className="h-10 w-10 rounded-full"
        />
      </td>

      <td className="px-5 py-4 border-b text-black bg-white">{name}</td>
      <td className="px-5 py-4 border-b bg-white text-black">{email}</td>
      <td className="px-5 py-4 border-b bg-white text-black">{phone}</td>
      <td className="px-5 py-4 border-b bg-white text-black">{division}</td>
      <td className="px-5 py-4 border-b bg-white text-black">{district}</td>

      <td className="px-5 py-4 border-b bg-white space-x-2">
        {status === "pending" ? (
          <>
            <button
              onClick={handleApprove}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              Approve
            </button>

            <button
              onClick={handleReject}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Reject
            </button>
          </>
        ) : (
          <span
            className={`px-3 py-1 rounded text-white text-sm ${
              status === "approved" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status}
          </span>
        )}
      </td>
    </tr>
  );
};

export default DecoratorRequestRow;
