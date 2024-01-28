import Breadcrumbs from './_components/Breadcrumbs'
import { Cards } from './_components/Cards'
import { Filter } from './_components/Filter'
import { Ordering } from './_components/Ordering'
import { Promo } from './_components/Promo'
import SearchForm from './_components/Search'
import { HotelDTO } from './_dtos/HotelDTO'

const token = 'QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv'

export default async function Home() {
  const res = await fetch('https://aio.server9.nelios.com/', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await res.json().catch(() => [])
  const hotels = body.data as HotelDTO[]

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
          <Ordering />
        </div>

        <Filter />
        <Cards cards={hotels} />
      </div>

      <Promo />
    </main>
  )
}
