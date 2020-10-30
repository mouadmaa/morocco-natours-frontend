import { Review } from './reviewModel';
import { User } from './userModel'

export interface Tour {
  id: string
  name: string
  duration: number
  maxGroupSize: number
  difficulty: string
  ratingsAverage: number
  ratingsQuantity: number
  price: number
  priceDiscount?: number
  summary: string
  description: string
  imageCover: string
  slug: string
  images: string[]
  startDates: Date[]
  startLocation: Location
  locations: Location[]
  guides: User[]
  reviews: Review[]
}

export interface Location {
  _id: string
  type: string
  coordinates: [number, number]
  address: string
  description: string
  day: number
}
