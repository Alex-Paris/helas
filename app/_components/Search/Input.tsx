import { ComponentProps, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: 'relative flex h-16 rounded-xl bg-transparent p-2 gap-1 cursor-pointer transition duration-300 focus-within:bg-white focus-within:shadow-card-shadow-light',
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
  base: 'absolute text-black cursor-pointer transition-all duration-300',
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
  setFocus(): void
  register: UseFormRegisterReturn
}

export function Input({
  className,
  actualState,
  label,
  children,
  setFocus,
  register,
  ...rest
}: InputProps) {
  const [state, setState] = useState(actualState)

  function handleFocus() {
    setState('focused')
    setFocus()
  }

  function handleLostFocus() {
    if (actualState !== 'filled') setState('default')
  }

  return (
    <div
      className={container({ actualState: state, className })}
      onClick={handleFocus}
    >
      <div className="flex h-full px-6 py-[0.375rem] ">
        <label className={title({ actualState: state })}>{label}</label>
        <input
          className={input({ actualState: state })}
          onFocus={handleFocus}
          {...register}
          {...rest}
          onBlur={(e) => {
            handleLostFocus()
            register.onBlur(e)
          }}
        />
      </div>
      {children}
    </div>
  )
}
