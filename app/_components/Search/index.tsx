'use client'

import { useState } from 'react'

import { Input } from './Input'
import { TogglerButton } from './TogglerButton'

export default function Search() {
  const [type, setType] = useState('excursions')

  return (
    <form className="container-custom flex w-fit flex-col items-center gap-2">
      {/* Togglers */}
      <div className="w-fit rounded-full border-[1px] border-stroke bg-translucent-bg p-1 backdrop-blur-lg">
        <TogglerButton
          actualState={type === 'excursions' ? 'selected' : 'default'}
          onClick={() => setType('excursions')}
        >
          Εκδρομές
        </TogglerButton>
        <TogglerButton
          actualState={type === 'hotels' ? 'selected' : 'default'}
          onClick={() => setType('hotels')}
        >
          Ξενοδοχεία
        </TogglerButton>
      </div>

      {/* Search bar */}
      <div className="flex items-center rounded-xl border-[1px] border-stroke bg-translucent-bg backdrop-blur-lg">
        <Input label="Προορισμός" placeholder="Ελλάδα" />
        <div className="h-8 w-[1px] bg-field-border" />
        <Input label="Check In" placeholder="Ημερομηνία" />
        <div className="h-8 w-[1px] bg-field-border" />
        <Input label="Check Out" placeholder="Ημερομηνία" />
        <div className="h-8 w-[1px] bg-field-border" />
        <Input label="Αριθμός ατόμων" placeholder="Ημερομηνία" />
      </div>
    </form>
  )
}
