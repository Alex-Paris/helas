import { useMemo } from 'react'

import { ComboboxItemDTO } from '../_dtos/ComboboxItemDTO'
import { Combobox } from './Combobox'

export function Ordering() {
  const options = useMemo<ComboboxItemDTO[]>(
    () => [
      {
        value: 'popular',
        text: 'Δημοφιλή',
      },
      {
        value: 'cheaper',
        text: 'φθηνότερο',
      },
    ],
    [],
  )

  return <Combobox items={options} />
}
