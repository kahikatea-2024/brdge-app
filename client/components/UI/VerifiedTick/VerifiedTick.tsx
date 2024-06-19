import { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputAttribues = InputHTMLAttributes<HTMLImageElement>


export default function VerifiedTick({className, ...rest}: InputAttribues) {

  return (
    <div className="flex -space-x-4">
        <img className={twMerge("w-12 h-12 rounded-full border-2 border-white", className)} {...rest}/>
    </div>
  )

}