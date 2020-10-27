import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/Layout/Layout.component'
import HomeHero from '../components/Home/HomeHero/HomeHero.component'
import HomeAbout from '../components/Home/HomeAbout/HomeAbout.component'

const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeAbout />
    </Layout>
  )
}

export default Home
