import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ImageAttributes extends ImgHTMLAttributes<HTMLImageElement> {}

export default function VerifiedTick({ className, ...rest }: ImageAttributes) {
  return (
    <div className="flex -space-x-4">
      <img
        className={twMerge(
          'h-12 w-12 rounded-full border-2 border-white',
          className,
        )}
        src="images/tick-logo.png"
        alt="verified"
        {...rest}
      />
    </div>
  )
}
