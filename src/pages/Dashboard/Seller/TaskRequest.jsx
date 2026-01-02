// import React from "react";
// import useAuth from "../../../hooks/useAuth";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { MdTaskAlt } from "react-icons/md";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import Swal from "sweetalert2";

// const TaskRequest = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   const { data: tasks = [], isLoading } = useQuery({
//     queryKey: ["tasks", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(
//         `/assigned-task?decoratorEmail=${user.email}&status=decorator_assigned`
//       );
//       return res.data;
//     },
//   });

//   // ✅ ACCEPT TASK
//   const handleAccept = (task) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You want to accept this task?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Accept",
//       cancelButtonText: "Cancel",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const res = await axiosSecure.patch(
//             `/decorations/${task._id}/status`,
//             { status: "planning" }
//           );

//           if (res.data.success) {
//             Swal.fire("Accepted!", "Task moved to Planning phase.", "success");
//             queryClient.invalidateQueries(["tasks", user?.email]);
//           }
//         } catch (error) {
//           Swal.fire("Error!", "Failed to accept task", "error");
//         }
//       }
//     });
//   };

//   // ❌ REJECT TASK
//   const handleReject = (task) => {
//     Swal.fire({
//       title: "Reject Task?",
//       text: "This task will be rejected!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Reject",
//       cancelButtonText: "Cancel",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const res = await axiosSecure.patch(
//             `/decorations/${task._id}/status`,
//             { status: "rejected" }
//           );

//           if (res.data.success) {
//             Swal.fire("Rejected!", "Task has been rejected.", "success");
//             queryClient.invalidateQueries(["tasks", user?.email]);
//           }
//         } catch (error) {
//           Swal.fire("Error!", "Failed to reject task", "error");
//         }
//       }
//     });
//   };

//   if (isLoading) return <LoadingSpinner />;

//   return (
//     <div className="mt-10">
//       <h2 className="text-xl font-semibold mb-4">
//         Decorations Pending Task: {tasks.length}
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Task</th>
//               <th>Decoration</th>
//               <th>Customer</th>
//               <th>Booking Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {tasks.map((task, i) => (
//               <tr key={task._id}>
//                 <th>{i + 1}</th>
//                 <td>
//                   <MdTaskAlt className="text-blue-500 text-2xl" />
//                 </td>
//                 <td>{task.name}</td>
//                 <td>{task.customer}</td>
//                 <td>{task.bookingDate}</td>
//                 <td className="flex gap-2">
//                   <button
//                     onClick={() => handleAccept(task)}
//                     className="btn btn-success btn-sm"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleReject(task)}
//                     className="btn btn-error btn-sm"
//                   >
//                     Reject
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskRequest;
