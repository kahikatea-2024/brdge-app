import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ExperienceLogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function ExperienceLogo({
  className,
  src,
  ...rest
}: ExperienceLogoProps) {
  const ImageStyle = 'object-scale-down'
  return (
    <img
      alt="ExperienceLogo"
      className={twMerge(ImageStyle, className)}
      src={src}
      {...rest}
    />
  )
}
