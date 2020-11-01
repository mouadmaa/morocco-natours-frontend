import { WrapPageElementBrowserArgs } from 'gatsby'
import React, { FC } from 'react'

import Layout from '../../Layout'

const wrapPageElement: FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}

export default wrapPageElement
