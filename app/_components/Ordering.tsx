'use client'

import { useMemo, useState } from 'react'

import { IComboboxItemDTO } from '../_dtos/IComboboxItemDTO'
import useSearch from '../_hooks/useSearch'
import { Combobox } from './Combobox'

interface OrderingProps {
  actualOrder?: string
}

export function Ordering({ actualOrder }: OrderingProps) {
  const { handleParam } = useSearch()

  const [value, setValue] = useState(actualOrder || 'popular')

  const options: IComboboxItemDTO[] = useMemo(
    () => [
      {
        value: 'popular',
        text: 'Δημοφιλή',
      },
      {
        value: 'cheaper',
        text: 'φθηνότερο',
      },
      {
        value: 'expensive',
        text: 'ακριβός',
      },
      {
        value: 'ascending',
        text: 'ανερχόμενος',
      },
      {
        value: 'descending',
        text: 'φθίνων',
      },
    ],
    [],
  )

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value)
    handleParam('order', e.target.value ?? '')
  }

  return (
    <Combobox
      items={options}
      value={value}
      defaultValue={value}
      onChange={handleChange}
    />
  )
}
