import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Decoration'
        address='add-decoration'
      />
      <MenuItem icon={MdHomeWork} label='My Decoration' address='my-decoration' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Booking'
        address='manage-booking'
      />
    </>
  )
}

export default SellerMenu
