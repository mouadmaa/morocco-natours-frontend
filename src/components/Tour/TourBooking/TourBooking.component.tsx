import React, { FC } from 'react'
// import { loadStripe } from '@stripe/stripe-js'

import {
  SectionBookingContainer, BookingContainer,
  BookingContentContainer, BookingText, BookingImage
} from './TourBooking.styles'
import Button from '../../UI/Button/Button.component'
import Heading from '../../UI/Heading/Heading.component'

interface TourBookingProps {
  tourId: string
  name: string
  images: string[]
  duration: number
}

// interface SessionId { session_id: string }
// const stripePromise = loadStripe(`${process.env.React_APP_STRIPE_PUBLISHABLE_KEY}`)

const TourBooking: FC<TourBookingProps> = props => {
  const { name, images, duration } = props

  const user = null

  // const handleClick = async () => {
  //   const response = await sendRequest(`/bookings/checkout-session/${tourId}`)
  //   if (!response) return

  //   const { session_id: sessionId } = response
  //   const stripe = await stripePromise

  //   if (stripe && sessionId) {
  //     const { error: { message } } = await stripe.redirectToCheckout({ sessionId })
  //     if (message) alert.error(message)
  //   }
  // }

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
              onClick={() => { }}
            >
              {false ? 'Processing...'
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
