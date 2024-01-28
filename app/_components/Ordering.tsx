import { ComboboxItemDTO } from '../_dtos/ComboboxItemDTO'
import { Combobox } from './Combobox'

export function Ordering() {
  const options: ComboboxItemDTO[] = [
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
  ]

  return <Combobox items={options} />
}
