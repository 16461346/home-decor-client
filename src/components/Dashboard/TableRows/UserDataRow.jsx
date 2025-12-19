import { useState } from "react";
import UpdateUserRoleModal from "../../Modal/UpdateUserRoleModal";
import { useQueryClient } from "@tanstack/react-query";

const UserDataRow = ({ user }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleRoleUpdated = (newRole) => {
    // Update UI instantly
    queryClient.setQueryData(["AllUsers"], (oldData) =>
      oldData.map((u) => (u._id === user._id ? { ...u, role: newRole } : u))
    );
    setIsEditOpen(false);
  };

  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-5 py-3 border-b border-gray-200 text-sm">{user.email}</td>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">{user.role}</td>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">{user.name}</td>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">
        <button
          onClick={() => setIsEditOpen(true)}
          className="bg-green-200 text-green-900 px-3 py-1 rounded hover:bg-green-300 transition"
        >
          Update
        </button>

        <UpdateUserRoleModal
          isOpen={isEditOpen}
          closeModal={() => setIsEditOpen(false)}
          role={user.role}
          email={user.email}
          onRoleUpdated={handleRoleUpdated}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
