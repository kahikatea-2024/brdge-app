import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import Logo from '../UI/Logo/Logo'
import TextField from '../UI/Text field/TextField'

export default function NavBar() {
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
          <Avatar
            src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
            size="small"
          />
          <Button>Sign out</Button>
        </div>
      </div>
    </div>
  )
}
