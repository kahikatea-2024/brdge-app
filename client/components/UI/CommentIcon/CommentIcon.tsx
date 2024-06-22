import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CommentIconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function CommentIcon({
  className,
  src,
  ...rest
}: CommentIconProps) {
  const ImageStyle = 'object-scale-down'
  return (
    <img
      alt="CommentIcon"
      className={twMerge(ImageStyle, className)}
      src={src}
      {...rest}
    />
  )
}
