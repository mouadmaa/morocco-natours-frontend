import React, { FC } from 'react'

import {
  ToursCardsContainer, ToursCardsTitleContainer, ToursCardsContentContainer,
  TourCardContainer, CardSideFrontContainer, CardSideBackContainer,
  CardTourDetailsContainer, CardTourBooking, ToursCardsButtonContainer
} from './HomeTours.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'
import { Tour } from '../../../models/tourModel'
import { optimizeCloudinaryImage } from '../../../utils/optimizeCloudinaryImage'

interface HomeToursProps {
  tours: Tour[]
}

const HomeTours: FC<HomeToursProps> = props => {
  const { tours } = props

  return (
    <ToursCardsContainer>
      <ToursCardsTitleContainer>
        <Heading type='Secondary'>
          Most popular tours
        </Heading>
      </ToursCardsTitleContainer>

      <ToursCardsContentContainer>
        {tours.map(tour => (
          <TourCardContainer key={tour.id}>
            <CardSideFrontContainer
              image={optimizeCloudinaryImage(tour.imageCover, 'h_240,q_50')}
            >
              <div>&nbsp;</div>
              <h3><span>{`${tour.name}`}</span></h3>
              <CardTourDetailsContainer>
                <ul>
                  <li>{`${tour.duration} day tours`}</li>
                  <li>{`Up to ${tour.maxGroupSize} people`}</li>
                  <li>{`${tour.guides.length} tour guides`}</li>
                  <li>Sleep in cozy hotels</li>
                  <li>{`Difficulty: ${tour.difficulty}`}</li>
                </ul>
              </CardTourDetailsContainer>
            </CardSideFrontContainer>

            <CardSideBackContainer>
              <CardTourBooking>
                <div>
                  <p>Only</p>
                  <p>{`$${tour.price}`}</p>
                </div>
                <Button
                  type='buttonLink'
                  color='white'
                  to={`/tour/${tour.slug}`}
                >
                  Details
                </Button>
              </CardTourBooking>
            </CardSideBackContainer>
          </TourCardContainer>
        ))}
      </ToursCardsContentContainer>

      <ToursCardsButtonContainer>
        <Button
          type='buttonLink'
          to='/overview'
        >
          Discover all tours
        </Button>
      </ToursCardsButtonContainer>
    </ToursCardsContainer>
  )
}

export default HomeTours
