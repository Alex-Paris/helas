import { IHotelDTO } from '../_dtos/IHotelDTO'
import { ISearchParams } from '../_dtos/ISearchParams'

const token = 'QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv'

export async function getHotels(searchParams: ISearchParams) {
  const { order, priceRng } = searchParams

  const res = await fetch('https://aio.server9.nelios.com/', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await res.json().catch(() => [])
  const hotels = body.data as IHotelDTO[]

  let filteredHotels: IHotelDTO[] = []

  if (priceRng) {
    // const filteredOrders = hotels.filter(order =>
    //   (!minPrice || order.price >= parseFloat(minPrice)) &&
    //   (!maxPrice || order.price <= parseFloat(maxPrice))
    // )
  }

  const meals = hotels
    .reduce((unique, order) => {
      if (!unique.includes(order.meal_plan)) unique.push(order.meal_plan)
      return unique
    }, [] as string[])
    .slice()
    .sort()

  switch (order) {
    case 'cheaper':
      filteredHotels = hotels.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price < b.price) return -1
        return 0
      })
      break

    case 'expensive':
      filteredHotels = hotels.sort((a, b) => {
        if (a.price < b.price) return 1
        if (a.price > b.price) return -1
        return 0
      })
      break

    case 'ascending':
      filteredHotels = hotels.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      break

    case 'descending':
      filteredHotels = hotels.sort((a, b) => {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      })
      break

    // popular
    default:
      filteredHotels = hotels.sort((a, b) => {
        if (a.rating < b.rating) return 1
        if (a.rating > b.rating) return -1
        return 0
      })
      break
  }

  return { meals, hotels: filteredHotels }
}
