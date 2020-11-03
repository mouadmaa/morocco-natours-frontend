import React, { FC, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'

import {
  SectionBookingContainer, BookingContainer,
  BookingContentContainer, BookingText, BookingImage
} from './TourBooking.styles'
import Button from '../../UI/Button/Button.component'
import Heading from '../../UI/Heading/Heading.component'
import { useAuthContext } from '../../../hooks/useAuthHook'

interface TourBookingProps {
  tourId: string
  name: string
  images: string[]
  duration: number
}

interface SessionId { session_id: string }
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const TourBooking: FC<TourBookingProps> = props => {
  const { name, tourId, images, duration } = props
  const [loading, setLoading] = useState(false)

  const { get } = useFetch<SessionId>()
  const { user } = useAuthContext()

  const handleClick = async () => {
    setLoading(true)
    const response = await get(`/bookings/checkout-session/${tourId}`)
    const { session_id: sessionId } = response

    const stripe = await stripePromise
    if (stripe && sessionId) {
      const { error: { message } } = await stripe.redirectToCheckout({ sessionId })
      if (message) toast.error(message)
    } else {
      toast.error('Something went wrong!')
    }
    setLoading(false)
  }

  return (
    <SectionBookingContainer>
      <BookingContainer>
        {images.map((image, index) => (
          <BookingImage
            key={index}
            index={index}
            src={image}
            alt={name}
          />
        ))}
        <BookingContentContainer>
          <Heading type='Secondary'>
            What are you waiting for?
          </Heading>
          <BookingText>
            {duration} days, 1 adventure,
            Infinite memories, Make it yours today!
          </BookingText>
          {user ? (
            <Button
              onClick={handleClick}
            >
              {loading ? 'Processing...'
                : 'Book tour now!'}
            </Button>
          ) : (
              <Button type='buttonLink' to='/login'>
                Log in to book tour
              </Button>
            )}
        </BookingContentContainer>
      </BookingContainer>
    </SectionBookingContainer>
  )
}

export default TourBooking
