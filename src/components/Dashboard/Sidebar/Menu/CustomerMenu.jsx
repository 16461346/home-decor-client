import { BsCalendarCheckFill } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { useState } from "react";
import BecomeSellerModal from "../../../Modal/BecomeSellerModal";
import { MdOutlinePayments, MdOutlineSendTimeExtension } from "react-icons/md";
const CustomerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuItem
        icon={BsCalendarCheckFill}
        label="My Booking"
        address="my-booking"
      />
      <MenuItem
        icon={MdOutlinePayments}
        label="Payment History"
        address="payment-history"
      />

      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 hover:bg-primary py-2 transition-colors duration-300 transform text-base-content cursor-pointer rounded-lg"
      >
        <MdOutlineSendTimeExtension className="w-5 h-5" />
        <span className="mx-4 font-medium">Request a Decorator</span>
      </div>

      <BecomeSellerModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default CustomerMenu;
