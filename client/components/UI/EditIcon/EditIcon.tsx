import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface EditIconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function EditIcon({
  className,
  src,
  ...rest
}: EditIconProps) {
  const ImageStyle = 'object-scale-down'
  return (
    <img
      alt="EditIcon"
      className={twMerge(ImageStyle, className)}
      src={src}
      {...rest}
    />
  )
}