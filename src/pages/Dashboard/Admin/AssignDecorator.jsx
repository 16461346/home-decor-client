import { useQuery } from "@tanstack/react-query";
import React, { useState, useRef } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";

const AssignDecorator = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const axiosSecure = useAxiosSecure();
  const decoratorModalRef = useRef();

  // 1️⃣ Get pending bookings
  const { data: bookings = [], isLoading,refetch } = useQuery({
    queryKey: ["bookings", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/bookings`);
      return res.data;
    },
  });

  // 2️⃣ Get decorators filtered by booking division & district
  const { data: decorators = [], isLoading: decoratorLoading } = useQuery({
    queryKey: ["decorators", selectedBooking?.district, selectedBooking?.division],
    enabled: !!selectedBooking,
    queryFn: async () => {
      if (!selectedBooking) return [];

      const res = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/userManage?role=decorator&workStatus=available`);

      // Filter decorators by division & district
      return res.data.filter(
        (dec) =>
          dec.work_Status === "available" &&
          dec.division === selectedBooking.division &&
          dec.district === selectedBooking.district
      );
    },
  });

  // 3️⃣ Open modal
  const openDecoratorModal = (booking) => {
    setSelectedBooking(booking);
    decoratorModalRef.current.showModal();
  };

  // 4️⃣ Assign decorator
  const assignDecorator = async (decoratorId) => {
    try {
      const res = await axiosSecure.patch(`${import.meta.env.VITE_API_URL}/bookings/assign-decorator`, {
        bookingId: selectedBooking._id,
        decoratorId,
      });

      if (res.data.success) {
        Swal.fire({
          position:"top-end",
          icon:'success',
          title:"Decorator Assigned Successfully",
          showConfirmButton:false,
          timer:2000,
        });
        decoratorModalRef.current.close();
        refetch()
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title:"Failed to assign decorator",
        position:"top-end",
        icon:"error",
        showCancelButton:false,
        timer:2000,
      });
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Address</th>
              <th>Decoration Price</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={booking.Image} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.name}</div>
                      <div className="text-sm opacity-50">{booking.category}</div>
                    </div>
                  </div>
                </td>
                <td>{booking.bookingDate}</td>
                <td>
                  {booking.division} / {booking.district}
                  <br />
                  <span className="badge badge-ghost badge-sm">{booking.customer}</span>
                </td>
                <td>$ {booking.price}</td>
                <th>
                  <button
                    onClick={() => openDecoratorModal(booking)}
                    className="btn btn-ghost bg-primary"
                  >
                    Find-Decorator
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog ref={decoratorModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">
            Available Decorators ({decorators.length})
          </h3>

          {decoratorLoading && <LoadingSpinner />}

          {decorators.length === 0 && (
            <p className="text-center text-red-500">No decorator available</p>
          )}

          {decorators.map((dec) => (
            <div
              key={dec._id}
              className="border p-3 rounded mb-2 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{dec.name}</p>
                <p className="text-sm">{dec.phone}</p>
              </div>
              <button
                onClick={() => assignDecorator(dec._id)}
                className="btn btn-sm btn-primary"
              >
                Assign
              </button>
            </div>
          ))}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AssignDecorator;
