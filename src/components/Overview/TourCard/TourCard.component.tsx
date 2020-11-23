import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
	CardContainer,
	CardHeaderContainer,
	CardPictureContainer,
	CardPictureOverlay,
	CardPictureImage,
	CardDetailsContainer,
	CardSubHeading,
	CardText,
	CardDataContainer,
	CardFooterContainer,
	CardFooterValue,
	CardFooterText,
	CardRatings,
} from './TourCard.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'
import { Tour } from '../../../models/tourModel'
import { optimizeCloudinaryImage } from '../../../utils/optimizeCloudinaryImage'

interface TourCardProps {
	tour: Tour
	index: number
}

const TourCard: FC<TourCardProps> = (props) => {
	const { index, tour } = props

	const data = useStaticQuery(query)

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2 + index / 6,
				ease: 'easeInOut',
				type: 'just',
			},
		},
	}

	return (
		<CardContainer variants={cardVariants} initial='hidden' animate='visible'>
			<CardHeaderContainer>
				<CardPictureContainer>
					<CardPictureOverlay>&nbsp;</CardPictureOverlay>
					<CardPictureImage src={optimizeCloudinaryImage(tour.imageCover, 'h_250,q_50')} alt={tour.name} />
				</CardPictureContainer>
				<Heading type='Tertiary'>
					<span>{tour.name}</span>
				</Heading>
			</CardHeaderContainer>

			<CardDetailsContainer>
				<CardSubHeading>{`${tour.difficulty} ${tour.duration}-day tour`}</CardSubHeading>
				<CardText>{tour.summary}</CardText>
				<CardDataContainer>
					<img src={data.mapSvg.publicURL} alt='map svg' />
					<span>{tour.startLocation.description}</span>
				</CardDataContainer>
				<CardDataContainer>
					<img src={data.flagSvg.publicURL} alt='flag svg' />
					<span>{new Date(tour.startDates[0]).toLocaleString('en-us', { month: 'long', year: 'numeric' })}</span>
				</CardDataContainer>
				<CardDataContainer>
					<img src={data.calendarSvg.publicURL} alt='calendar svg' />
					<span>{`${tour.locations.length} stops`}</span>
				</CardDataContainer>
				<CardDataContainer>
					<img src={data.peopleSvg.publicURL} alt='people svg' />
					<span>{`${tour.maxGroupSize} people`}</span>
				</CardDataContainer>
			</CardDetailsContainer>

			<CardFooterContainer>
				<p>
					<CardFooterValue>{`$${tour.price}`}</CardFooterValue>
					<CardFooterText>{' Per Person'}</CardFooterText>
				</p>
				<CardRatings>
					<CardFooterValue>{tour.ratingsAverage}</CardFooterValue>
					<CardFooterText>{` Rating (${tour.ratingsQuantity})`}</CardFooterText>
				</CardRatings>
				<Button type='buttonLink' to={`/tour/${tour.slug}`}>
					Details
				</Button>
			</CardFooterContainer>
		</CardContainer>
	)
}

export default TourCard

const query = graphql`
	{
		mapSvg: file(relativePath: { eq: "map.svg" }) {
			publicURL
		}
		flagSvg: file(relativePath: { eq: "flag.svg" }) {
			publicURL
		}
		calendarSvg: file(relativePath: { eq: "calendar.svg" }) {
			publicURL
		}
		peopleSvg: file(relativePath: { eq: "people.svg" }) {
			publicURL
		}
	}
`
