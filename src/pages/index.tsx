import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../Layout'
import HomeHero from '../components/Home/HomeHero/HomeHero.component'
import HomeAbout from '../components/Home/HomeAbout/HomeAbout.component'
import HomeFeatures from '../components/Home/HomeFeatures/HomeFeatures.component'
import HomeTours from '../components/Home/HomeTours/HomeTours.component'
import HomeStories from '../components/Home/HomeStories/HomeStories.component'
import HomeLogin from '../components/Home/HomeLogin/HomeLogin.component'

const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeTours />
      <HomeStories />
      <HomeLogin />
    </Layout>
  )
}

export default Home
