import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardAttributes extends HtmlHTMLAttributes<HTMLDivElement> {}

export default function ExperienceCard({ className, ...rest }: CardAttributes) {
  const CardStyle = ''
  return (
    <div className={twMerge(CardStyle, className)} {...rest}>
      Card content goes here
    </div>
  )
}
