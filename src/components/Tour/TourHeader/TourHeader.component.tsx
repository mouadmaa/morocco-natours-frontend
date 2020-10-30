import React, { FC } from 'react'

import {
  SectionHeaderContainer, HeaderHeroContainer, HeaderHeroOverlay,
  HeaderHeroImage, HeadingBoxContainer, HeadingBoxDetails,
  HeadingBoxGroup
} from './TourHeader.styles'
import Heading from '../../UI/Heading/Heading.component'
import { graphql, useStaticQuery } from 'gatsby'

interface TourHeaderProps {
  name: string
  imageCover: string
  duration: number
  description: string
}

const TourHeader: FC<TourHeaderProps> = props => {
  const { name, imageCover, description, duration } = props

  const data = useStaticQuery(query)

  return (
    <SectionHeaderContainer>
      <HeaderHeroContainer>
        <HeaderHeroOverlay>&nbsp;</HeaderHeroOverlay>
        <HeaderHeroImage
          src={imageCover}
          alt={name}
        />
      </HeaderHeroContainer>
      <HeadingBoxContainer>
        <Heading type='Primary'>
          <span>{name} Tour</span>
        </Heading>
        <HeadingBoxGroup>
          <HeadingBoxDetails>
            <img src={data.clockSvg.publicURL} alt='clock svg' />
            <span>{`${duration} days`}</span>
          </HeadingBoxDetails>
          <HeadingBoxDetails>
            <img src={data.mapWhiteSvg.publicURL} alt='map svg' />
            <span>{description}</span>
          </HeadingBoxDetails>
        </HeadingBoxGroup>
      </HeadingBoxContainer>
    </SectionHeaderContainer>
  )
}

export default TourHeader

const query = graphql`
  {
    clockSvg: file(relativePath: {eq: "clock.svg"}) {
      publicURL
    }
    mapWhiteSvg: file(relativePath: {eq: "map-white.svg"}) {
      publicURL
    }
  }
`
