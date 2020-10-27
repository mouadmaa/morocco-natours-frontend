import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/Layout/Layout.component'
import HomeHero from '../components/Home/HomeHero/HomeHero.component'

const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <HomeHero />
    </Layout>
  )
}

export default Home
