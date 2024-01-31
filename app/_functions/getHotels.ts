import { IHotelDTO } from '../_dtos/IHotelDTO'
import { ISearchParams } from '../_dtos/ISearchParams'
import { sortResults } from './sortResults'

const token = 'QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv'

export async function getHotels(searchParams: ISearchParams) {
  const { order, priceRange, meal, star } = searchParams

  // Decoding the query parameters
  const decodedMeals = decodeURIComponent(meal || '').split(',')
  const decodedStars = decodeURIComponent(star || '').split(',')
  const decodedPrices = decodeURIComponent(priceRange || '').split(',')

  // Fetching data from the API
  const res = await fetch('https://aio.server9.nelios.com/', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await res.json().catch(() => [])
  const hotels = body.data as IHotelDTO[]

  // Filtering hotels by query parameters
  const filteredHotels: IHotelDTO[] = hotels.filter(
    (hotel) =>
      (meal ? decodedMeals.includes(hotel.meal_plan) : true) &&
      (star ? decodedStars.includes(hotel.rating.toString()) : true) &&
      (priceRange
        ? hotel.price >= parseFloat(decodedPrices[0]) &&
          hotel.price <= parseFloat(decodedPrices[1])
        : true),
  )

  // Getting meals list
  const meals = hotels
    .reduce((unique, order) => {
      if (!unique.includes(order.meal_plan)) unique.push(order.meal_plan)
      return unique
    }, [] as string[])
    .slice()
    .sort()

  // Getting rate list
  const stars = hotels
    .reduce((unique, order) => {
      if (!unique.includes(`${order.rating}`)) unique.push(`${order.rating}`)
      return unique
    }, [] as string[])
    .slice()
    .sort((a, b) => b.localeCompare(a))

  // Sorting results
  const orderedHotels = sortResults(filteredHotels, order)

  return { meals, stars, hotels: orderedHotels }
}
