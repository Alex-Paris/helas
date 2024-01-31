import Breadcrumbs from './_components/Breadcrumbs'
import { Cards } from './_components/Cards'
import { Filter } from './_components/Filter'
import { Ordering } from './_components/Ordering'
import { PopupFilter } from './_components/PopupFilter'
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
        <p className="h4 lg:h1">ΕΛΛΑΔΑ</p>
        <p className="text-14">Πακέτα - Προσφορές</p>
      </div>

      <SearchForm />

      {/* Results */}
      <div className="container-custom flex flex-col gap-6 lg:grid lg:grid-cols-[312px_1fr]">
        <div className="hidden lg:block" />
        <div className="flex flex-col items-center justify-between gap-4 px-3 sm:flex-row">
          <div className="text-16">
            <span className="text-16-bold">139</span> διαθέσιμα πακέτα διακοπών
          </div>

          <div className="flex w-full justify-between sm:w-auto">
            <PopupFilter meals={meals} stars={stars} />
            <Ordering actualOrder={searchParams.order} />
          </div>
        </div>

        <Filter meals={meals} stars={stars} className="hidden lg:flex" />
        <Cards cards={hotels} />
      </div>

      <Promo />
    </main>
  )
}
