import { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ImageAttributes extends HtmlHTMLAttributes<HTMLImageElement>

export default function ImagePost({ className, ...rest }: ImageAttributes) {
  const ImageStyle = "object-scale-down h-48 w-96"

  return (
    <img
    className={twMerge(ImageStyle, className)}
    {...rest}
  />
  )
}
