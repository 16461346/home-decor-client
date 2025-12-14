import React from "react";
import { FaEye } from "react-icons/fa";

const PaymentHistory = () => {
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="font-semibold  bg-base-200 text-base-content">
            {/* row 1 */}
            <tr>
              <td>#JJDFGJKDFKAFD8SAD</td>
              <td>Jun 20 2026</td>
              <td>$ 745</td>
              <td>Paid/Canceled</td>
              <td>
                <button className="ml-2  transition-colors">
                  <FaEye size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
