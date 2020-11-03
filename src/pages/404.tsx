import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'

import {
  NotFoundContainer, NotFoundImage
} from '../Layout/NotFound/NotFound.styles'
import SEO from '../components/Gatsby/SEO'
import Button from '../components/UI/Button/Button.component'

const NotFound: FC<PageProps> = props => {
  const { data } = props as any

  return (
    <NotFoundContainer>
      <SEO title='Not Found 404' />
      <NotFoundImage
        src={data.notFoundSvg.publicURL}
        alt='not found'
      />
      <Button
        type='buttonLink'
        to='/'
      >
        Go Back To Home
      </Button>
    </NotFoundContainer>
  )
}

export default NotFound

export const query = graphql`
  {
    notFoundSvg: file(relativePath: {eq: "not-found.svg"}) {
      publicURL
    }
  }
`
