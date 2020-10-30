import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { HeaderContainer, HeaderTextContainer } from './HomeHeader.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'

const HomeHeader: FC = () => {
  const data = useStaticQuery(query)

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

export default HomeHeader

const query = graphql`
  {
    file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
