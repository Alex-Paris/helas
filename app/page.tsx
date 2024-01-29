import Breadcrumbs from './_components/Breadcrumbs'
import { Cards } from './_components/Cards'
import { Filter } from './_components/Filter'
import { Ordering } from './_components/Ordering'
import { Promo } from './_components/Promo'
import SearchForm from './_components/Search'
import { ISearchParams } from './_dtos/ISearchParams'
import { getHotels } from './_functions/getHotels'

interface HomeProps {
  searchParams: ISearchParams
}

export default async function Home({ searchParams }: HomeProps) {
  const { hotels, meals, stars } = await getHotels(searchParams)

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
      <div className="container-custom grid grid-cols-[312px_1fr] gap-6">
        <div />
        <div className="flex items-center justify-between px-3">
          <div className="text-16">
            <span className="text-16-bold">139</span> διαθέσιμα πακέτα διακοπών
          </div>
          <Ordering actualOrder={searchParams.order} />
        </div>

        <Filter meals={meals} stars={stars} />
        <Cards cards={hotels} />
      </div>

      <Promo />
    </main>
  )
}
