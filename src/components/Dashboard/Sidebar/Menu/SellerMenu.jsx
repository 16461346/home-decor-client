import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory, MdTaskAlt } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
     
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Booking'
        address='manage-booking'
      />
      {/* <MenuItem
        icon={MdTaskAlt}
        label='Task Request'
        address='task-request'
      /> */}
    </>
  )
}

export default SellerMenu
