import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ImageAttributes extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'small' | 'medium' | 'large'
}

export default function VerifiedTick({
  className,
  size,
  ...rest
}: ImageAttributes) {
  let imageSize = ''
  switch (size) {
    case 'small':
      imageSize = 'h-4 w-4'
      break

    case 'medium':
      imageSize = 'h-8 w-8'
      break

    case 'large':
      imageSize = 'h-12 w-12'
      break

    default:
      break
  }
  return (
    <div className="flex -space-x-4">
      <img
        className={twMerge('h-12 w-12 rounded-full', imageSize, className)}
        src="images/tick-logo.png"
        alt="verified"
        {...rest}
      />
    </div>
  )
}
