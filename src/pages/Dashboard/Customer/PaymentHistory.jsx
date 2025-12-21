import React from "react";
import { FaEye } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: Booking = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/my-bookins`
      );
      return result.data;
    },
  });
  console.log(Booking);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="mt-10">
      <div className="overflow-x-auto rounded-t-xl">
        <table className="table w-full bg-base-200 text-base-content">
          {/* head */}
          <thead className="bg-base-200  text-base-content text-[18px]">
            <tr>
              <th>Transaction ID</th>
              <th>Payment Date</th>
              <th>Payment Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          {Booking.map((Sbooking) => (
            <tbody
              key={Sbooking._id}
              className="font-semibold bg-base-200 text-base-content"
            >
              {/* row 1 */}
              <tr>
                <td>#{Sbooking?.transactionId}</td>
                <td>
                  {new Date(Sbooking?.created_at).toLocaleDateString("en-US")}
                </td>

                <td>$ {Sbooking?.price}</td>
                <td>{Sbooking?.payment_status}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
