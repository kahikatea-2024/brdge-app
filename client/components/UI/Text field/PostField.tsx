import React, { useRef, useEffect } from 'react'
import { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface PostProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function PostField({ className, ...rest }: PostProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    adjustTextareaHeight() // Adjust height on mount
  }, [])

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  }

  return (
    <textarea
      ref={textareaRef}
      className={twMerge('resize-none overflow-hidden', className)}
      onInput={adjustTextareaHeight}
      {...rest}
    ></textarea>
  )
}

export default PostField
