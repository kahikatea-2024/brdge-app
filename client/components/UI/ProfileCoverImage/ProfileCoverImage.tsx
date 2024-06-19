import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ImageAttributes extends ImgHTMLAttributes<HTMLImageElement> {}

export default function ProfileCoverImage({
  className,
  alt,
  ...rest
}: ImageAttributes) {
  const ImageStyle = 'object-fill'

  return <img className={twMerge(ImageStyle, className)} alt={alt} {...rest} />
}
