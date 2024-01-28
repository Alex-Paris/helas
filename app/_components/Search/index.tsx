'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../Button'
import { Input } from './Input'
import { TogglerButton } from './TogglerButton'

const formSchema = z.object({
  destination: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  numberOfPeople: z.string().optional(),
})

type SearchFormInputs = z.infer<typeof formSchema>

export default function SearchForm() {
  const [type, setType] = useState('excursions')

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { isSubmitting, dirtyFields },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(formSchema),
  })

  async function handleSearch(form: SearchFormInputs) {
    alert(form.destination)
    // try {
    //   const sectorIndex = sectors.findIndex((s) => s.name === form.sector)
    //   const to = sectors[sectorIndex].email || 'secretaria@funada.com.br'

    //   const sendData: IEmailContactPostProps = {
    //     ...form,
    //     to,
    //     sector: form.sector,
    //     contact: 'Contato',
    //     subject: `* [Envio de Contato ${form.sector}] - ${form.name} *`,
    //   }

    //   const res = await fetch('/contato/api/email-routes/contact', {
    //     method: 'POST',
    //     body: JSON.stringify(sendData),
    //   })

    //   if (res.status !== 200) {
    //     const data = await res.json()
    //     throw new AppError(data, res.status)
    //   }

    //   addToast('Mensagem enviada com sucesso!', 'success')
    //   reset()
    //   setIsShowing(false)
    // } catch (error) {
    //   console.log(error)
    //   if (error instanceof AppError && error.statusCode === 429) {
    //     addToast(error.message, 'error')
    //   } else {
    //     addToast('Ocorreu um erro! Tente novamente mais tarde', 'error')
    //   }
    // }
  }

  return (
    <form
      className="container-custom flex w-fit flex-col items-center gap-2"
      onSubmit={handleSubmit(handleSearch)}
    >
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
        <Input
          label="Προορισμός"
          placeholder="Ελλάδα"
          disabled={isSubmitting}
          setFocus={() => setFocus('destination')}
          actualState={dirtyFields.destination ? 'filled' : 'default'}
          register={register('destination')}
        />

        <div className="h-8 w-[1px] bg-field-border" />

        <Input
          label="Check In"
          placeholder="Ημερομηνία"
          disabled={isSubmitting}
          setFocus={() => setFocus('checkIn')}
          actualState={dirtyFields.checkIn ? 'filled' : 'default'}
          register={register('checkIn')}
        />

        <div className="h-8 w-[1px] bg-field-border" />

        <Input
          label="Check Out"
          placeholder="Ημερομηνία"
          disabled={isSubmitting}
          setFocus={() => setFocus('checkOut')}
          actualState={dirtyFields.checkOut ? 'filled' : 'default'}
          register={register('checkOut')}
        />

        <div className="h-8 w-[1px] bg-field-border" />

        <Input
          label="Αριθμός ατόμων"
          placeholder="Ημερομηνία"
          disabled={isSubmitting}
          setFocus={() => setFocus('numberOfPeople')}
          actualState={dirtyFields.numberOfPeople ? 'filled' : 'default'}
          register={register('numberOfPeople')}
        >
          <Button type="submit">
            <MagnifyingGlass /> Αναζήτηση
          </Button>
        </Input>
      </div>
    </form>
  )
}
