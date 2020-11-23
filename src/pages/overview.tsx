import React, { FC, Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { OverviewContent } from '../components/Overview/overview.styles'
import SEO from '../components/Gatsby/SEO'
import TourCard from '../components/Overview/TourCard/TourCard.component'
import { Tour } from '../models/tourModel'

interface OverviewProps extends PageProps {
	data: ToursQuery
}

const Overview: FC<OverviewProps> = (props) => {
	const { data } = props
	const tours = data.allTours.nodes

	return (
		<Fragment>
			<SEO title='All Our Tours' />
			<OverviewContent>
				{tours.map((tour, index) => <TourCard key={tour.id} index={index} tour={tour} />)}
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
