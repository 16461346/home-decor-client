import React from "react";
import { FaEye } from "react-icons/fa";

const PaymentHistory = () => {
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-[18px]">
            <tr>
              <th>Transaction ID</th>
              <th>Payment Date</th>
              <th>Payment Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            {/* row 1 */}
            <tr>
              <td>#JJDFGJKDFKAFD8SAD</td>
              <td>jun 20 2026</td>
              <td> $ 745</td>
              <td>Paid/canceled</td>
              <td>
                <button className="ml-2">
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
