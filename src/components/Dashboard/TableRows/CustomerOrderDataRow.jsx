import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'

const CustomerOrderDataRow = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  return (
    <tr>
      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
        <div className='flex items-center'>
          <div className='shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src='https://i.ibb.co/rMHmQP2/money-plant-in-feng-shui-brings-luck.jpg'
                className='mx-auto object-cover rounded h-10 w-15'
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
        <p className='text-base-content'>Money Plant</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
        <p className='text-base-content'>Indoor</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
        <p className='text-base-content'>$120</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
        <p className='text-base-content'>5</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
        <p className='text-base-content'>Pending</p>
      </td>

      <td className='px-5 py-5 border-b border-base-300 bg-base-100 text-sm'>
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
