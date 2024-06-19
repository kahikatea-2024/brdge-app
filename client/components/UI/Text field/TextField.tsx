import { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

// interface TextFielProps extends HtmlHTMLAttributes<HTMLInputElement> {}
type InputAttributes = InputHTMLAttributes<HTMLInputElement>

function TextField({ className, ...rest }: InputAttributes) {
  const TextFieldClasses =
    'shadow appearance-none border rounded-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline '
  return <input className={twMerge(TextFieldClasses, className)} {...rest} />
}

export default TextField
