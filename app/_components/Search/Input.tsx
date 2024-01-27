import { ComponentProps, useRef, useState } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: 'relative flex flex-col h-16 rounded-xl bg-transparent px-8 py-[0.875rem] gap-1 cursor-pointer transition duration-300 focus-within:bg-white focus-within:shadow-card-shadow-light',
  variants: {
    actualState: {
      default: 'bg-transparent',
      focused: 'bg-white shadow-card-shadow-lighter',
      filled: 'bg-transparent',
    },
  },
  defaultVariants: {
    actualState: 'default',
  },
})

const title = tv({
  base: 'absolute text-black transition-all duration-300',
  variants: {
    actualState: {
      default: 'top-6 text-field-14 font-normal',
      focused: 'top-3 text-xs font-medium leading-4',
      filled: 'top-3 text-xs font-medium leading-4',
    },
  },
  defaultVariants: {
    actualState: 'default',
  },
})

const input = tv({
  base: 'text-field-14 mt-auto bg-transparent outline-none cursor-pointer focus:cursor-auto',
  variants: {
    actualState: {
      default: 'placeholder-transparent',
      focused: 'placeholder-gray',
      filled: 'placeholder-gray',
    },
  },
  defaultVariants: {
    actualState: 'default',
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof container> {
  label: string
}

export function Input({ className, actualState, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [state, setState] = useState(actualState)

  function handleFocus() {
    setState('focused')
    inputRef.current?.focus()
  }

  function handleLostFocus() {
    if (actualState !== 'filled') setState('default')
  }

  return (
    <div
      className={container({ actualState: state, className })}
      onClick={handleFocus}
    >
      <label className={title({ actualState: state })}>{label}</label>
      <input
        ref={inputRef}
        onBlur={handleLostFocus}
        onFocus={handleFocus}
        className={input({ actualState: state })}
        {...rest}
      />
    </div>
  )
}
