import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Logo({ className, ...rest }: LogoProps) {
  const ImageStyle = 'object-scale-down'
  return (
    <img
      src="/images/BR.png"
      alt="logo"
      className={twMerge(ImageStyle, className)}
      {...rest}
    />
  )
}
