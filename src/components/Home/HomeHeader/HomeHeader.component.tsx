import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { HeaderContainer, HeaderTextContainer } from './HomeHeader.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'

const HomeHeader: FC = () => {
  const data = useStaticQuery(query)

  return (
    <HeaderContainer>
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

      <Image fluid={data.personImage.childImageSharp.fluid} alt="person" />
      <Image fluid={data.mountain1Image.childImageSharp.fluid} alt="mountain 1" />
      <Image fluid={data.mountain2Image.childImageSharp.fluid} alt="mountain 2" />
      <Image fluid={data.mountain3Image.childImageSharp.fluid} alt="mountain 3" />
      <Image fluid={data.skyImage.childImageSharp.fluid} alt="sky" />
    </HeaderContainer>
  )
}

export default HomeHeader

const query = graphql`
  {
    personImage: file(relativePath: {eq: "person-3.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountain1Image: file(relativePath: {eq: "mountain-1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountain2Image: file(relativePath: {eq: "mountain-2.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountain3Image: file(relativePath: {eq: "mountain-3.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skyImage: file(relativePath: {eq: "sky.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
