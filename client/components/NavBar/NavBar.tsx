/* eslint-disable prefer-const */
import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import Logo from '../UI/Logo/Logo'
import TextField from '../UI/Text field/TextField'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useCurrentUser } from '../../hooks/useProfile'

export default function NavBar() {
  const { logout, loginWithRedirect } = useAuth0()

  const [isOpen, setIsOpen] = useState(false)
  const { data: profile } = useCurrentUser()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  function handleSignOut() {
    logout()
  }

  function handleSignIn() {
    loginWithRedirect()
  }

  // if (userProfile || isError)
  return (
    <div className=" rounded-md border-gray-200 bg-lightGrey pb-4 pl-4 shadow-xl dark:bg-dlightGrey">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-1 p-4">
        <Link to="/home">
          <Logo className="h-10" />
        </Link>
        <TextField
          placeholder="Search..."
          className=" text-darkGray  bg-darkGrey focus:ring-2 focus:ring-blue-500 dark:bg-dextraLightGrey"
        />
        <div className="flex items-center gap-2">
          <div> </div>
          <IfAuthenticated>
            <button onClick={toggleDropdown} className="relative">
              <Avatar src={profile?.avatar_image} size="small" />
              {isOpen && (
                <div className="center-20 absolute w-20 rounded-lg bg-lightGrey py-1 shadow-lg dark:bg-dlightGrey">
                  <button
                    onClick={() => {}}
                    className="block w-full px-4 py-2 text-left text-sm text-extraLightGrey hover:bg-primary dark:text-dextraLightGrey"
                  >
                    <Link to={`/profiles/${profile?.user_id}`}>Profile</Link>
                  </button>
                  <button
                    onClick={() => {
                      // Handle edit link action
                      console.log('Navigate to edit page')
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-extraLightGrey hover:bg-primary dark:text-dextraLightGrey"
                  >
                    Edit
                  </button>
                </div>
              )}
            </button>
            <Button onClick={handleSignOut}>Sign out</Button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Button onClick={handleSignIn}>Sign in</Button>
          </IfNotAuthenticated>
        </div>
      </div>
    </div>
  )
}
