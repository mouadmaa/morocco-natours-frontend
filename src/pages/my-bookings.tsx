import React, { FC, Fragment, useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'

import { OverviewContent, OverviewHeading } from '../components/Overview/overview.styles'
import TourCard from '../components/Overview/TourCard/TourCard.component'
import Heading from '../components/UI/Heading/Heading.component'
import Loader from '../components/UI/Loader/Loader.component'
import { Tour } from '../models/tourModel'

const Overview: FC<PageProps> = props => {
  const { location } = props

  const [myTours, setMyTours] = useState<Tour[]>([])
  const { get, loading } = useFetch<Tour[]>()

  useEffect(() => {
    (async () => {
      if (location.search.includes('alert=booking')) {
        toast.success("Your booking was successful! Please check your email for a confirmation. " +
          "If your booking doesn't show up here immediately, please come back later.", { delay: 25000 })
      }

      const tours = await get('/bookings/my-bookings')
      setMyTours(tours)
    })()
  }, [location])

  return (
    <Fragment>
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
        {myTours.map(tour => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}
      </OverviewContent>
    </Fragment>
  )
}

export default Overview
