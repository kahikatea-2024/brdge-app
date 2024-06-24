import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import Logo from '../UI/Logo/Logo'
import TextField from '../UI/Text field/TextField'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
  // const { profile } = useParams()
  const { user, logout, loginWithRedirect } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  function handleSignOut() {
    logout()
  }

  function handleSignIn() {
    loginWithRedirect()
  }

  return (
    <div className=" dark:bg-dlightGrey rounded-md border-gray-200 bg-lightGrey pb-4 pl-4 shadow-xl">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-1 p-4">
        <Link to="/">
          <Logo className="h-10" />
        </Link>
        <TextField
          placeholder="Search..."
          className=" text-darkGray  dark:bg-dextraLightGrey bg-darkGrey focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2">
          <div> </div>
          <IfAuthenticated>
            <button onClick={toggleDropdown} className="relative">
              <Avatar src={user?.picture} size="small" />
              {isOpen && (
                <div className="center-20 dark:bg-dlightGrey absolute w-20 rounded-lg bg-lightGrey py-1 shadow-lg">
                  <button
                    onClick={() => {}}
                    className="dark:text-dextraLightGrey block w-full px-4 py-2 text-left text-sm text-extraLightGrey hover:bg-primary"
                  >
                    <Link to="/Profile">Profile</Link>
                  </button>
                  <button
                    onClick={() => {
                      // Handle edit link action
                      console.log('Navigate to edit page')
                    }}
                    className="dark:text-dextraLightGrey block w-full px-4 py-2 text-left text-sm text-extraLightGrey hover:bg-primary"
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
