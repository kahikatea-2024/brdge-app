import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import Logo from '../UI/Logo/Logo'
import TextField from '../UI/Text field/TextField'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'

export default function NavBar() {
  const { user, logout, loginWithRedirect } = useAuth0()

  function handleSignOut() {
    logout()
  }

  function handleSignIn() {
    loginWithRedirect()
  }

  return (
    <div className="border-gray-200 bg-lightGrey">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-1 p-4">
        <a href="#">
          <Logo className="h-6" />
        </a>
        <TextField
          placeholder="Search..."
          className="text-darkGray w-1/2 bg-extraLightGrey focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2">
          <IfAuthenticated>
            <Avatar src={user?.picture} size="small" />
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
