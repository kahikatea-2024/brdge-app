import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SpinnerProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Logo({ className, ...rest }: SpinnerProps) {
  const ImageStyle = 'object-scale-down'
  return (
    <img
      src="/images/Spinner.gif"
      alt="...Loading"
      className={twMerge(ImageStyle, className)}
      {...rest}
    />
  )
}
