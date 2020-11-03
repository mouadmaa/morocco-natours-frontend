import React, { FC, Fragment } from 'react'
import { PageProps } from 'gatsby'

import SEO from '../components/Gatsby/SEO'
import TourHeader from '../components/Tour/TourHeader/TourHeader.component'
import TourDescription from '../components/Tour/TourDescription/TourDescription.component'
import TourPictures from '../components/Tour/TourPictures/TourPictures.component'
import TourMap from '../components/Tour/TourMap/TourMap.component'
import TourReviews from '../components/Tour/TourReviews/TourReviews.component'
import TourBooking from '../components/Tour/TourBooking/TourBooking.component'
import { Tour as TourType } from '../models/tourModel'

interface TourProps extends PageProps {
  pageContext: {
    tour: TourType
  }
}

const Tour: FC<TourProps> = props => {
  const { pageContext: { tour } } = props

  return (
    <Fragment>
      <SEO title={tour.name} />
      <TourHeader
        name={tour.name}
        imageCover={tour.imageCover}
        duration={tour.duration}
        description={tour.startLocation.description}
      />
      <TourDescription
        date={tour.startDates[0]}
        difficulty={tour.difficulty}
        maxGroupSize={tour.maxGroupSize}
        ratingsAverage={tour.ratingsAverage}
        description={tour.description}
        guides={tour.guides}
      />
      <TourPictures
        name={tour.name}
        images={tour.images}
      />
      <TourMap
        locations={tour.locations}
      />
      <TourReviews
        reviews={tour.reviews}
      />
      <TourBooking
        tourId={tour.id}
        name={tour.name}
        images={tour.images}
        duration={tour.duration}
      />
    </Fragment>
  )
}

export default Tour
