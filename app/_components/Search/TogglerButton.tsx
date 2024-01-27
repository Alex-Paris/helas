import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const style = tv({
  base: 'text-button rounded-full px-6 py-4 transition-colors duration-300',
  variants: {
    actualState: {
      default: 'bg-transparent text-gray',
      selected: 'bg-white text-accent-green shadow-card-shadow-lighter',
    },
  },
  defaultVariants: {
    actualState: 'default',
  },
})

type TogglerButtonProps = ComponentProps<'button'> & VariantProps<typeof style>

export function TogglerButton({
  children,
  actualState,
  className,
  ...rest
}: TogglerButtonProps) {
  return (
    <button
      type="button"
      className={style({ actualState, className })}
      {...rest}
    >
      {children}
    </button>
  )
}
