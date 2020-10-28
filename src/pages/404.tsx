import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../Layout'

const NotFound: FC<PageProps> = () => {
  return (
    <Layout>
      <h3>Not Found 404</h3>
    </Layout>
  )
}

export default NotFound
