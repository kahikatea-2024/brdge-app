import React, { useRef, useEffect } from 'react'
import { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface PostProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function CommentField({ className, ...rest }: PostProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  }

  // useEffect(() => {
  //   adjustTextareaHeight() // Adjust height on mount
  // }, [])

  return (
    <textarea
      ref={textareaRef}
      className={twMerge('resize-none overflow-hidden', className)}
      onInput={adjustTextareaHeight}
      {...rest}
    ></textarea>
  )
}

export default CommentField
