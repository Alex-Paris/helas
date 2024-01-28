import Image from 'next/image'

import { HotelDTO } from '../_dtos/HotelDTO'
import { Button } from './Button'

interface CardsProps {
  cards: HotelDTO[]
}

export function Cards({ cards }: CardsProps) {
  return (
    <div className="flex flex-1 flex-wrap">
      {cards.map((card) => (
        <div key={card.name} className="max-w-[33.333333%] basis-1/3 p-3">
          <article className="group cursor-pointer rounded-xl bg-translucent-bg shadow-bg-blur-shadow-lighter backdrop-blur-lg">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                src={card.photo}
                alt={card.name}
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-2 p-6 pt-5">
              <span>{card.meal_plan}</span>
              <h6 className="max-h-[72px] overflow-hidden">{card.name}</h6>
              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <span className="text-xs font-semibold">ΑΠΟ</span>&nbsp;
                  <h6>{card.price}</h6>
                </div>
                <Button>Κράτηση</Button>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}
