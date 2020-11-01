import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Heading from '../components/UI/Heading/Heading.component'

const NotFound: FC<PageProps> = () => {
  return (
    <Heading type='Secondary'>
      Not Found 404
    </Heading>
  )
}

export default NotFound
