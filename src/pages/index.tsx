import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../Layout'
import HomeHeader from '../components/Home/HomeHeader/HomeHeader.component'
import HomeAbout from '../components/Home/HomeAbout/HomeAbout.component'
import HomeFeatures from '../components/Home/HomeFeatures/HomeFeatures.component'
import HomeTours from '../components/Home/HomeTours/HomeTours.component'
import HomeStories from '../components/Home/HomeStories/HomeStories.component'
import HomeLogin from '../components/Home/HomeLogin/HomeLogin.component'
import { Tour } from '../models/tourModel'

interface HomeProps extends PageProps {
  data: ToursQuery
}

const Home: FC<HomeProps> = props => {
  const { data } = props
  const tours = data.allTours.nodes

  return (
    <Layout>
      <HomeHeader />
      <HomeAbout />
      <HomeFeatures />
      <HomeTours
        tours={tours}
      />
      <HomeStories />
      <HomeLogin />
    </Layout>
  )
}

export default Home

interface ToursQuery {
  allTours: {
    nodes: Tour[]
  }
}

export const query = graphql`
  query {
    allTours(limit: 3) {
      nodes {
        id
        name
        price
        slug
        imageCover
        duration
        maxGroupSize
        difficulty
        guides {
          id
        }
      }
    }
  }
`
