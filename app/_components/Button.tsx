import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: 'text-button flex items-center gap-2 border-[1px] rounded-lg px-6 py-4 transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-gray',
  variants: {
    styleType: {
      default:
        'bg-accent-green text-white border-transparent hover:bg-accent-blue',
      outlined:
        'bg-transparent text-text-on-image border-text-on-image hover:bg-accent-green hover:border-transparent hover:text-white',
      'outlined-green':
        'bg-transparent text-accent-green border-acctext-accent-green hover:bg-accent-green hover:border-transparent hover:text-white',
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
