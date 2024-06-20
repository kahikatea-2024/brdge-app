import { HtmlHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface PostProps extends HtmlHTMLAttributes<HTMLParagraphElement> {}

function PostText({ children, className, ...rest }: PostProps) {
  return (
    <>
      <p
        className={twMerge('resize-none overflow-hidden', className)}
        {...rest}
      >
        {children}
      </p>
    </>
  )
}

export default PostText
