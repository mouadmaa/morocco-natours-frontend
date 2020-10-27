import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { HeaderContainer, HeaderTextContainer } from './HomeHero.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'

const HomeHero: FC = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          fluid(quality: 10, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const HeroImage = [
    `linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8))`,
    data.file.childImageSharp.fluid
  ]

  return (
    <HeaderContainer
      fluid={HeroImage}
    >
      <HeaderTextContainer>
        <Heading>
          <div>Outdoors</div>
          <div>is where life happens</div>
        </Heading>

        <Button
          color='white'
          type='buttonLink'
          to='/overview'
        >
          Discover our tours
        </Button>
      </HeaderTextContainer>
    </HeaderContainer>
  )
}

export default HomeHero
