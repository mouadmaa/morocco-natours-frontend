import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../Layout'
import { Tour as TourType } from '../models/tourModel'

interface TourProps extends PageProps {
  pageContext: {
    tour: TourType
  }
}

const Tour: FC<TourProps> = props => {
  const { pageContext: { tour } } = props

  return (
    <Layout>
      {tour.name}
    </Layout>
  )
}

export default Tour
