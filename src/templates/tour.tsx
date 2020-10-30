import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../Layout'
import { Tour as TourType } from '../models/tourModel'
import TourHeader from '../components/Tour/TourHeader/TourHeader.component'

interface TourProps extends PageProps {
  pageContext: {
    tour: TourType
  }
}

const Tour: FC<TourProps> = props => {
  const { pageContext: { tour } } = props

  return (
    <Layout>
      <TourHeader
        name={tour.name}
        imageCover={tour.imageCover}
        duration={tour.duration}
        description={tour.startLocation.description}
      />
    </Layout>
  )
}

export default Tour
