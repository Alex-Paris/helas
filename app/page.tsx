import Breadcrumbs from './_components/Breadcrumbs'
import Search from './_components/Search'

export default function Home() {
  return (
    <main className="space-y-16">
      <Breadcrumbs />

      {/* Title */}
      <div className="container-custom flex flex-col items-center gap-2">
        <h1>ΕΛΛΑΔΑ</h1>
        <p className="text-14">Πακέτα - Προσφορές</p>
      </div>

      <Search />
    </main>
  )
}
