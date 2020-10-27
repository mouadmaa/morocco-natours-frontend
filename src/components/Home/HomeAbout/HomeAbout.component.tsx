import React, { FC } from 'react'
import Image from 'gatsby-image'

import {
  AboutContainer, AboutTitleContainer, AboutContentContainer,
  AboutTextContainer, AboutImagesContainer
} from './HomeAbout.styles'
import Heading from '../../UI/Heading/Heading.component'
import { graphql, useStaticQuery } from 'gatsby'

const HomeAbout: FC = () => {
  const data = useStaticQuery(query)

  return (
    <AboutContainer>
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
          <Image fluid={data.natour3.childImageSharp.fluid} />
          <Image fluid={data.natour1.childImageSharp.fluid} />
          <Image fluid={data.natour2.childImageSharp.fluid} />
        </AboutImagesContainer>
      </AboutContentContainer>
    </AboutContainer>
  )
}

export default HomeAbout

const query = graphql`
  {
    natour1: file(relativePath: {eq: "natour-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    natour2: file(relativePath: {eq: "natour-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    natour3: file(relativePath: {eq: "natour-3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
