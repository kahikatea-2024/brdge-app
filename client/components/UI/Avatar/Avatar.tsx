import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import VerifiedTick from '../VerifiedTick/VerifiedTick'

interface AvatarAttributes extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'small' | 'medium' | 'large'
  verified?: boolean
}

export default function Avatar({
  className,
  alt,
  size,
  verified,
  ...rest
}: AvatarAttributes) {
  const ImageStyle = 'object-scale-down rounded-full'
  let imageSize = ''
  switch (size) {
    case 'small':
      imageSize = 'h-8 w-8'
      break

    case 'medium':
      imageSize = 'h-16 w-16'
      break

    case 'large':
      imageSize = 'h-32 w-32'
      break

    default:
      break
  }

  return (
    <div className={twMerge(imageSize, 'relative')}>
      <img
        className={twMerge(ImageStyle, imageSize, className)}
        alt={alt}
        {...rest}
      />
      {verified && (
        <VerifiedTick className="absolute bottom-0 right-0" size={size} />
      )}
    </div>
  )
}
