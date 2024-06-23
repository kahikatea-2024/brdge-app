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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleSignOut() {
    logout()
  }

  function handleSignIn() {
    loginWithRedirect()
  }

  return (
    <div className=" rounded-md border-gray-200 bg-lightGrey pb-4 pl-4 shadow-xl">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-1 p-4">
        <Link to="/">
          <Logo className="h-10" />
        </Link>
        <TextField
          placeholder="Search..."
          className="text-darkGray w-1/2 bg-extraLightGrey focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2">
          <div> </div>
          <IfAuthenticated>
            <button
            onClick={toggleDropdown}
            className="relative"
            >
              <Avatar src={user?.picture} size="small" />
              {isOpen && (
        <div className="absolute center-20 w-20 bg-lightGrey rounded-lg shadow-lg py-1">
          <button
            onClick={() => {
            }}
            className="block px-4 py-2 text-sm text-extraLightGrey hover:bg-primary w-full text-left"
          >
           <Link to="/Profile">Profile</Link>
          </button>
          <button
            onClick={() => {
              // Handle edit link action
              console.log("Navigate to edit page");
            }}
            className="block px-4 py-2 text-sm text-extraLightGrey hover:bg-primary w-full text-left"
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
