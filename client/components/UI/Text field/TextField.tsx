import { InputHTMLAttributes, useState } from 'react'
import { Route } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { getUserProfileByUsername } from '../../../../server/db/userProfile'
import Button from '../Button/Button'

// interface TextFielProps extends HtmlHTMLAttributes<HTMLInputElement> {}
type InputAttributes = InputHTMLAttributes<HTMLInputElement>

function TextField({ className, ...rest }: InputAttributes) {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Text changed:', event.target.value)
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const profile = getUserProfileByUsername(text)
    return (
      <>
        <Route path={`profiles/${profile}`} />
      </>
    )
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
      <Button typeof="submit">o</Button>
    </form>
  )
}

export default TextField
