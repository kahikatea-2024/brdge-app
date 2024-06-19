import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ImageAttributes extends ImgHTMLAttributes<HTMLImageElement> {}

export default function ImagePost({
  className,
  alt,
  ...rest
}: ImageAttributes) {
  const ImageStyle = 'object-scale-down h-48 w-96'

  return <img className={twMerge(ImageStyle, className)} alt={alt} {...rest} />
}
