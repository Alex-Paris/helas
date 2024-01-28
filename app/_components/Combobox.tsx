import { ComboboxItemDTO } from '../_dtos/ComboboxItemDTO'

interface ComboboxProps {
  defaultValue?: string
  items: ComboboxItemDTO[]
}

export function Combobox({ defaultValue, items }: ComboboxProps) {
  return (
    <select
      className="text-field-14 rounded-lg border-[1px] border-field-border bg-translucent-bg px-4 py-3 outline-none"
      defaultValue={defaultValue}
    >
      {items.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}
