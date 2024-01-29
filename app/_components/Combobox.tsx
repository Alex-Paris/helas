import { ComponentProps } from 'react'

import { IComboboxItemDTO } from '../_dtos/IComboboxItemDTO'

interface ComboboxProps extends ComponentProps<'select'> {
  items: IComboboxItemDTO[]
}

export function Combobox({ items, ...rest }: ComboboxProps) {
  return (
    <select
      className="text-field-14 rounded-lg border-[1px] border-field-border bg-translucent-bg px-4 py-3 outline-none"
      {...rest}
    >
      {items.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}
