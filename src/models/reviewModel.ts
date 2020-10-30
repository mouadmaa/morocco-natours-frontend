import { User } from './userModel'

export interface Review {
  id: string
  review: string
  rating: number
  createAt: Date
  tour: string
  user: User
}
