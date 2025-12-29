import { FaUserCog } from "react-icons/fa";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdAssignment } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem icon={BsFillHouseAddFill} label="Add Decoration" address="add-decoration" />
      <MenuItem icon={MdHomeWork} label="My Decoration" address="my-decoration" />
      <MenuItem icon={FaClipboardList} label="Decorate Request" address="decorate-request" />
      <MenuItem icon={MdAssignment} label="Assign Decorator " address="assign-decorator" />
    </>
  );
};

export default AdminMenu;
