import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...rest }: ButtonProps) {
  const ButtonClasses =
    'bg-primary text-darkGrey w-auto rounded-full border border-lightGrey px-4 py-2 hover:shadow-[0px_0px_2px_2px_darkGrey]'
  return (
    <button className={twMerge(ButtonClasses, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
