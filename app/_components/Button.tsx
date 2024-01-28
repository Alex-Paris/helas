import { ComponentProps } from 'react'

export function Button({ children, ...rest }: ComponentProps<'button'>) {
  return (
    <button
      className="text-button flex justify-center gap-2 rounded-lg bg-accent-green px-6 py-4 text-white transition-colors duration-300 hover:bg-accent-blue disabled:cursor-not-allowed disabled:bg-gray"
      {...rest}
    >
      {children}
    </button>
  )
}
