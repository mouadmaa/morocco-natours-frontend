import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import {
  AboutSectionContainer, AboutContent, AboutContentContainer, AboutShadow
} from './HomeAbout.styles'

const HomeAbout: FC = () => {
  const data = useStaticQuery(query)

  const contents = [
    { id: '01', image: data.nature1.childImageSharp.fluid, text: 'Get Started', title: 'What level of hiker are you?', description: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?' },
    { id: '02', image: data.nature2.childImageSharp.fluid, text: 'Hiking Essentials', title: 'Picking the right Hiking Gear!', description: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing.A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.' },
    { id: '03', image: data.nature3.childImageSharp.fluid, text: 'Where you go is the key', title: 'Understand Your Map & Timing', description: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..' },
  ]

  return (
    <AboutSectionContainer>
      <AboutShadow />
      <AboutContentContainer>
        {contents.map(content => (
          <AboutContent
            key={content.id}
            reverse={content.id === '02'}
          >
            <div>
              <div>
                <div />
                <p>{content.text}</p>
              </div>
              <span>{content.id}</span>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
            </div>
            <Image
              fluid={content.image}
              alt={`nature ${content.id}`}
            />
          </AboutContent>
        ))}
      </AboutContentContainer>
    </AboutSectionContainer>
  )
}

export default HomeAbout

const query = graphql`
  {
    nature1: file(relativePath: {eq: "nature-1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nature2: file(relativePath: {eq: "nature-2.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nature3: file(relativePath: {eq: "nature-3.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
