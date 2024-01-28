import Image from 'next/image'

import img from '../../_assets/promo.webp'
import { Button } from '../Button'

export function Cards() {
  const cards = [
    {
      image: img,
      text1: '2 ημερεσ / 1 νυχτΑ',
      text2: 'Καλοκαιρι στο KALOGRIA BEACH HOTEL 4*  στην Αχαΐα με το Ι.Χ σας',
      text3: '158€',
    },
    {
      image: img,
      text1: '2 ημερεσ / 1 νυχτΑ',
      text2: 'Καλοκαιρι στο KALOGRIA BEACH HOTEL 4*  στην Αχαΐα με το Ι.Χ σας',
      text3: '158€',
    },
    {
      image: img,
      text1: '2 ημερεσ / 1 νυχτΑ',
      text2: 'Καλοκαιρι στο KALOGRIA BEACH HOTEL 4*  στην Αχαΐα με το Ι.Χ σας',
      text3: '158€',
    },
    {
      image: img,
      text1: '2 ημερεσ / 1 νυχτΑ',
      text2: 'Καλοκαιρι στο KALOGRIA BEACH HOTEL 4*  στην Αχαΐα με το Ι.Χ σας',
      text3: '158€',
    },
    {
      image: img,
      text1: '2 ημερεσ / 1 νυχτΑ',
      text2: 'Καλοκαιρι στο KALOGRIA BEACH HOTEL 4*  στην Αχαΐα με το Ι.Χ σας',
      text3: '158€',
    },
  ]

  return (
    <div className="flex flex-1 flex-wrap">
      {cards.map((card, index) => (
        <div key={index} className="max-w-[33.333333%] basis-1/3 p-3">
          <article className="group cursor-pointer rounded-xl bg-translucent-bg shadow-bg-blur-shadow-lighter backdrop-blur-lg">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                src={card.image}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-2 p-6 pt-5">
              <span>{card.text1}</span>
              <h6 className="max-h-[72px] overflow-hidden">{card.text2}</h6>
              <div className="flex items-center justify-between">
                <div className="flex">
                  ΑΠΟ &nbsp;<h6>{card.text3}</h6>
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
