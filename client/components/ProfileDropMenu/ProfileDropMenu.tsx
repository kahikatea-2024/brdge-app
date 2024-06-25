import { useState } from 'react'
import Avatar from '../UI/Avatar/Avatar'

const DropdownMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      {/* Avatar with profile link */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Avatar src={user?.picture} size="small" />
        </div>
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg">
          <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            Profile
          </button>
          <button
            onClick={() => {
              // Handle edit link action
              console.log('Navigate to edit page')
            }}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
