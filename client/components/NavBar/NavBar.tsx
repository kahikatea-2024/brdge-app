import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import Logo from '../UI/Logo/Logo'
import TextField from '../UI/Text field/TextField'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { Link } from 'react-router-dom'

export default function NavBar() {
  // const { profile } = useParams()
  const { user, logout, loginWithRedirect } = useAuth0()

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
          <IfAuthenticated>
            <Link to="/Profile">
              <Avatar src={user?.picture} size="small" />
            </Link>
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
