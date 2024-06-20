import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SocialMediaIconsProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function SocialMediaIcons({
  className,
  src,
  ...rest
}: SocialMediaIconsProps) {
  const ImageStyle = 'object-scale-down'
  return (
    <img
      alt="SocialMediaIcons"
      className={twMerge(ImageStyle, className)}
      src={src}
      {...rest}
    />
  )
}
