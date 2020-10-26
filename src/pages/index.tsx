import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout/layout.component'

const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <h3>Hello world!</h3>
    </Layout>
  )
}

export default Home
