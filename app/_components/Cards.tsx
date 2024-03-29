import { Star } from '@phosphor-icons/react/dist/ssr'

import { IHotelDTO } from '../_dtos/IHotelDTO'
import { Button } from './Button'
import { Image } from './Image'

interface CardsProps {
  cards: IHotelDTO[]
}

export function Cards({ cards }: CardsProps) {
  return (
    <div className="flex flex-1 flex-wrap">
      {cards.map((card) => (
        <div
          key={card.name}
          className="max-w-full basis-full p-3 sm:max-w-[50%] sm:basis-1/2 lg:max-w-[33.333333%] lg:basis-1/3"
        >
          <article className="group cursor-pointer rounded-xl bg-translucent-bg shadow-bg-blur-shadow-lighter backdrop-blur-lg">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                className="h-72 object-cover group-hover:scale-110"
                image={card.photo}
                alt={card.name}
                width={500}
                height={500}
              />
              <div className="absolute bottom-6 left-6 flex items-end gap-2 opacity-80 transition duration-300 group-hover:opacity-100">
                <Star size={24} weight="fill" className="text-yellow-300" />
                <span className="text-16-bold leading-none text-text-on-image">
                  {card.rating}
                  <span className="text-small-12"> / 5</span>
                </span>
              </div>
            </div>
            <div className="space-y-2 p-6 pt-5">
              <span className="small-text-12">{card.meal_plan}</span>
              <p className="h7 lg:h6 max-h-[72px] overflow-hidden">
                {card.name}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <span className="text-xs font-semibold">ΑΠΟ</span>&nbsp;
                  <p className="h7 lg:h6">{Math.round(card.price)}€</p>
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
