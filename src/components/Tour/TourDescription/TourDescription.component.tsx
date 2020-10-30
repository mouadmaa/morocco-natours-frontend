import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
  SectionDescriptionContainer, DescriptionBoxContainer, OverviewBoxContainer,
  OverviewBoxLabel, OverviewBoxGroupContainer, OverviewBoxDetailsContainer,
  OverviewBoxText, OverviewBoxImage, OverviewBox
} from './TourDescription.styles'
import Heading from '../../UI/Heading/Heading.component'
import { User } from '../../../models/userModel'
import { optimizeCloudinaryImage } from '../../../utils/optimizeCloudinaryImage'

interface TourDescription {
  date: Date
  difficulty: string
  maxGroupSize: number
  ratingsAverage: number
  description: string
  guides: User[]
}

const TourDescription: React.FC<TourDescription> = props => {
  const { date, difficulty, maxGroupSize, ratingsAverage, description, guides } = props

  const data = useStaticQuery(query)

  return (
    <SectionDescriptionContainer>
      <OverviewBox>
        <OverviewBoxContainer>
          <OverviewBoxGroupContainer>
            <Heading type='Secondary'>
              Quick facts
            </Heading>

            <OverviewBoxDetailsContainer>
              <img src={data.calendarSvg.publicURL} alt='calendar svg' />
              <OverviewBoxLabel>Next date</OverviewBoxLabel>
              <OverviewBoxText>
                {new Date(date).toLocaleString(
                  'en-us', { month: 'long', year: 'numeric' }
                )}
              </OverviewBoxText>
            </OverviewBoxDetailsContainer>

            <OverviewBoxDetailsContainer>
              <img src={data.difficultySvg.publicURL} alt='difficulty svg' />
              <OverviewBoxLabel>Difficulty</OverviewBoxLabel>
              <OverviewBoxText>{difficulty}</OverviewBoxText>
            </OverviewBoxDetailsContainer>

            <OverviewBoxDetailsContainer>
              <img src={data.peopleSvg.publicURL} alt='people svg' />
              <OverviewBoxLabel>Participants</OverviewBoxLabel>
              <OverviewBoxText>{`${maxGroupSize} People`}</OverviewBoxText>
            </OverviewBoxDetailsContainer>

            <OverviewBoxDetailsContainer>
              <img src={data.starSvg.publicURL} alt='star svg' />
              <OverviewBoxLabel>Rating</OverviewBoxLabel>
              <OverviewBoxText>{`${ratingsAverage} / 5`}</OverviewBoxText>
            </OverviewBoxDetailsContainer>
          </OverviewBoxGroupContainer>

          <OverviewBoxGroupContainer>
            <Heading type='Secondary'>
              Your tour guides
            </Heading>

            {guides.map(guide => (
              <OverviewBoxDetailsContainer
                key={guide.id}
              >
                <OverviewBoxImage
                  src={optimizeCloudinaryImage(guide.photo as string, 'h_40')}
                  alt={guide.name}
                />
                <OverviewBoxLabel>
                  {`${guide.role === 'guide'
                    ? 'Tour guide' : 'Lead guide'}`}
                </OverviewBoxLabel>
                <OverviewBoxText>
                  {guide.name}
                </OverviewBoxText>
              </OverviewBoxDetailsContainer>
            ))}
          </OverviewBoxGroupContainer>
        </OverviewBoxContainer>
      </OverviewBox>

      <DescriptionBoxContainer>
        <Heading type='Secondary'>
          About the park camper tour
        </Heading>
        <p>{description.split('\n')[0]}</p>
        <p>{description.split('\n')[1]}</p>
      </DescriptionBoxContainer>
    </SectionDescriptionContainer>
  )
}

export default TourDescription

const query = graphql`
  {
    difficultySvg: file(relativePath: {eq: "difficulty.svg"}) {
      publicURL
    }
    starSvg: file(relativePath: {eq: "star.svg"}) {
      publicURL
    }
    calendarSvg: file(relativePath: {eq: "calendar.svg"}) {
      publicURL
    }
    peopleSvg: file(relativePath: {eq: "people.svg"}) {
      publicURL
    }
  }
`
