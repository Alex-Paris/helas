import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: 'text-button flex items-center gap-2 border-[1px] rounded-lg px-6 py-4 text-white transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-gray',
  variants: {
    styleType: {
      default: 'bg-accent-green border-transparent hover:bg-accent-blue',
      outlined:
        'bg-transparent border-text-on-image hover:bg-accent-green hover:border-transparent',
    },
  },
  defaultVariants: {
    styleType: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof container>

export function Button({
  children,
  className,
  styleType,
  ...rest
}: ButtonProps) {
  return (
    <button className={container({ styleType, className })} {...rest}>
      {children}
    </button>
  )
}
