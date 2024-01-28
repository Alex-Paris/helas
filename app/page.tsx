import Breadcrumbs from './_components/Breadcrumbs'
import { Cards } from './_components/Cards'
import { Ordering } from './_components/Ordering'
import SearchForm from './_components/Search'

export default function Home() {
  return (
    <main className="space-y-16">
      <Breadcrumbs />

      {/* Title */}
      <div className="container-custom flex flex-col items-center gap-2">
        <h1>ΕΛΛΑΔΑ</h1>
        <p className="text-14">Πακέτα - Προσφορές</p>
      </div>

      <SearchForm />

      {/* Results */}
      <div className="container-custom flex gap-6">
        <div>
          <div />
          <div className="h-11 w-[312px] bg-translucent-bg"></div>
        </div>
        <div>
          <div className="flex items-center justify-between px-3">
            <div className="text-16">
              <span className="text-16-bold">139</span> διαθέσιμα πακέτα
              διακοπών
            </div>
            <Ordering />
          </div>
          <Cards />
        </div>
      </div>
    </main>
  )
}
