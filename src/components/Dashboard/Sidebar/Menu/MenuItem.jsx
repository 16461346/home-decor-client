/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 hover:bg-primary my-2 transition-colors duration-300 transform rounded-lg 
        ${isActive ? 'bg-primary text-base-content  font-semibold' : 'text-base-content hover:bg-base-300'}`
      }
    >
      <Icon className='w-5 h-5' />
      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem
