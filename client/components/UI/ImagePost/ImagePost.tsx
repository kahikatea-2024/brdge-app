import { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputAttribues = InputHTMLAttributes<HTMLImageElement>

export default function ImagePost({ className, ...rest }: InputAttribues) {
  const ImageStyle = "object-scale-down h-48 w-96 ..."

  return (
    <img
    className={twMerge(ImageStyle, className)}
    {...rest}
  />
  )

}