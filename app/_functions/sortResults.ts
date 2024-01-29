import { IHotelDTO } from '../_dtos/IHotelDTO'

export function sortResults(hotels: IHotelDTO[], order?: string) {
  let orderedHotels: IHotelDTO[] = []

  switch (order) {
    case 'cheaper':
      orderedHotels = hotels.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price < b.price) return -1
        return 0
      })
      break

    case 'expensive':
      orderedHotels = hotels.sort((a, b) => {
        if (a.price < b.price) return 1
        if (a.price > b.price) return -1
        return 0
      })
      break

    case 'ascending':
      orderedHotels = hotels.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      break

    case 'descending':
      orderedHotels = hotels.sort((a, b) => {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      })
      break

    // popular
    default:
      orderedHotels = hotels.sort((a, b) => {
        if (a.rating < b.rating) return 1
        if (a.rating > b.rating) return -1
        return 0
      })
      break
  }

  return orderedHotels
}
