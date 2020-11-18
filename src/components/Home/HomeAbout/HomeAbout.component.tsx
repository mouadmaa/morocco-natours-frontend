import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import {
  AboutContainer, AboutTitleContainer, AboutContentContainer,
  AboutTextContainer, AboutImagesContainer, AboutShadow
} from './HomeAbout.styles'
import Heading from '../../UI/Heading/Heading.component'

const HomeAbout: FC = () => {
  const data = useStaticQuery(query)

  return (
    <AboutContainer>
      <AboutShadow />
      <AboutTitleContainer>
        <Heading type='Secondary'>
          Exciting tours for adventurous people
        </Heading>
      </AboutTitleContainer>
      <AboutContentContainer>
        <AboutTextContainer>
          <h3>You're going to fall in love with nature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur.
          </p>
          <h3>Live adventures like you never have before</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi minima, totam ullam ipsa ratione vero. Ratione iste dignissimos
            similique ex totam distinctio fugiat consequatur.
          </p>
        </AboutTextContainer>
        <AboutImagesContainer>
          <Image fluid={data.nature3.childImageSharp.fluid} alt='nature 3' />
          <Image fluid={data.nature1.childImageSharp.fluid} alt='nature 1' />
          <Image fluid={data.nature2.childImageSharp.fluid} alt='nature 2' />
        </AboutImagesContainer>
      </AboutContentContainer>
    </AboutContainer>
  )
}

export default HomeAbout

const query = graphql`
  {
    nature1: file(relativePath: {eq: "nature-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nature2: file(relativePath: {eq: "nature-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nature3: file(relativePath: {eq: "nature-3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
