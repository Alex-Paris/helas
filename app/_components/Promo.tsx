import { PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

import promoImg from '../_assets/promo.webp'
import { Button } from './Button'

export function Promo() {
  return (
    <div className="container-custom relative !my-32 flex h-[468px] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl shadow-card-shadow-light">
      <h4 className="text-text-on-image">Δε βρηκατε αυτο που ψαχνετε;</h4>
      <Button styleType="outlined">
        Επικοινωνήστε μαζί μας <PaperPlaneTilt size={16} />
      </Button>

      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={promoImg}
        alt="Promotion image"
      />
      <div className="absolute inset-0 -z-10 bg-pure-black opacity-20" />
    </div>
  )
}
