import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'

const CustomerOrderDataRow = ({Sbooking}) => {
  const{Image,category,price,startTime,transactionId,endTime,name,status,bookingDate}=Sbooking
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  return (
    <tr>
      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <div className='flex items-center'>
          <div className='shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={Image}
                className='mx-auto object-cover rounded h-10 w-15'
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>{name}</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>{category}</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>${price}</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>{bookingDate}</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>{startTime}</p>
      </td>
      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>{endTime}</p>
      </td>
      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <p className='text-base-content'>{status}</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-200 text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold  leading-tight'
        >
          <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative cursor-pointer'>Cancel</span>
        </button>

        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td>
    </tr>
  )
}

export default CustomerOrderDataRow
