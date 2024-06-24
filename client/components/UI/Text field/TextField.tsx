import { InputHTMLAttributes, useState } from 'react'
import { useNavigate } from 'react-router'
import { twMerge } from 'tailwind-merge'
import { fetchUserProfileByUsername } from '../../../apis/profile'

// interface TextFielProps extends HtmlHTMLAttributes<HTMLInputElement> {}
type InputAttributes = InputHTMLAttributes<HTMLInputElement>

function TextField({ className, ...rest }: InputAttributes) {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const profile = await fetchUserProfileByUsername(text)
    console.log(profile.user_id)

    return navigate(`../../profiles/${profile.user_id}`)
  }

  const TextFieldClasses =
    'shadow appearance-none border rounded-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline '
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={twMerge(TextFieldClasses, className)}
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        {...rest}
      />
    </form>
  )
}

export default TextField
