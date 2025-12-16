import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
       <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Decoration'
        address='add-decoration'
      />
       <MenuItem icon={MdHomeWork} label='My Decoration' address='my-decoration' />
    </>
  )
}

export default AdminMenu
