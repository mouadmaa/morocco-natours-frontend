import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
  FeaturesContainer, FeaturesContentContainer, FeatureBoxContainer
} from './HomeFeatures.styles'

const HomeFeatures: FC = () => {
  const data = useStaticQuery(query)

  const NatureImage = [
    `linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8))`,
    data.natureImage.childImageSharp.fluid
  ]

  return (
    <FeaturesContainer
      fluid={NatureImage}
    >
      <FeaturesContentContainer>
        <FeatureBoxContainer>
          <img src={data.wordSvg.publicURL} alt='word svg' />
          <h3>Explore the world</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur.
          </p>
        </FeatureBoxContainer>
        <FeatureBoxContainer>
          <img src={data.compassSvg.publicURL} alt='compass svg' />
          <h3>Meet nature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur.
          </p>
        </FeatureBoxContainer>
        <FeatureBoxContainer>
          <img src={data.mapSvg.publicURL} alt='map svg' />
          <h3>Find your way</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur.
          </p>
        </FeatureBoxContainer>
        <FeatureBoxContainer>
          <img src={data.starSvg.publicURL} alt='star svg' />
          <h3>Live a healthier life</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur.
          </p>
        </FeatureBoxContainer>
      </FeaturesContentContainer>
    </FeaturesContainer>
  )
}

export default HomeFeatures

const query = graphql`
  {
    natureImage: file(relativePath: {eq: "nature-4.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wordSvg: file(relativePath: {eq: "world.svg"}) {
      publicURL
    }
    compassSvg: file(relativePath: {eq: "compass.svg"}) {
      publicURL
    }
    mapSvg: file(relativePath: {eq: "map.svg"}) {
      publicURL
    }
    starSvg: file(relativePath: {eq: "star.svg"}) {
      publicURL
    }
  }
`
