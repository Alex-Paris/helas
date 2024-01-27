import { CaretRight } from '@phosphor-icons/react/dist/ssr'

export default function Breadcrumbs() {
  return (
    <div className="container-custom text-small-12 mt-6 flex justify-center gap-2">
      <span>Πακέτα</span>
      <CaretRight size={16} className="text-accent-green" />
      <span>Ελλάδα</span>
      <CaretRight size={16} className="text-accent-green" />
      <span>Αρχική</span>
    </div>
  )
}
