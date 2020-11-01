import React, { FC, Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { OverviewContent, OverviewHeading } from '../components/Overview/overview.styles'
import TourCard from '../components/Overview/TourCard/TourCard.component'
import Heading from '../components/UI/Heading/Heading.component'
import { Tour } from '../models/tourModel'

interface OverviewProps extends PageProps {
  data: ToursQuery
}

const Overview: FC<OverviewProps> = props => {
  const { data } = props
  const tours = data.allTours.nodes

  return (
    <Fragment>
      <OverviewHeading>
        <Heading type='Secondary'>
          All Our Tours
        </Heading>
      </OverviewHeading>
      <OverviewContent>
        {tours.map(tour => (
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

interface ToursQuery {
  allTours: {
    nodes: Tour[]
  }
}

export const query = graphql`
  query {
    allTours {
      nodes {
        id
        name
        price
        slug
        imageCover
        duration
        maxGroupSize
        difficulty
        description
        ratingsAverage
        ratingsQuantity
        startDates
        summary
        startLocation {
          description
        }
        locations {
          description
        }
      }
    }
  }
`
