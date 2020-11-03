import React, { FC, Fragment, useEffect, useState } from 'react'
import { PageProps, navigate } from 'gatsby'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'

import { OverviewContent, OverviewHeading } from '../components/Overview/overview.styles'
import SEO from '../components/Gatsby/SEO'
import TourCard from '../components/Overview/TourCard/TourCard.component'
import Heading from '../components/UI/Heading/Heading.component'
import Loader from '../components/UI/Loader/Loader.component'
import { Tour } from '../models/tourModel'
import { useAuthContext } from '../hooks/useAuthHook'

const MyBookings: FC<PageProps> = props => {
  const { location } = props

  const [myTours, setMyTours] = useState<Tour[]>([])
  const { get, loading } = useFetch<Tour[]>()

  const { user } = useAuthContext()

  useEffect(() => {
    if (!user) navigate('/login', { replace: true })
  }, [user])

  useEffect(() => {
    (async () => {
      if (location.search.includes('alert=booking')) {
        toast.success("Your booking was successful! Please check your email for a confirmation. " +
          "If your booking doesn't show up here immediately, please come back later.", { autoClose: 25000, }
        )
      }
      const tours = await get('/bookings/my-bookings')
      setMyTours(tours)
    })()
  }, [location])

  return (
    <Fragment>
      <SEO title='My Bookings' />
      <OverviewHeading>
        <Heading type='Secondary'>
          My Bookings
        </Heading>
      </OverviewHeading>
      <OverviewContent>
        {loading && (
          <Fragment>
            <Loader />
            <Loader />
            <Loader />
          </Fragment>
        )}
        {!!myTours.length && (
          myTours.map(tour => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))
        )}
      </OverviewContent>
    </Fragment>
  )
}

export default MyBookings
