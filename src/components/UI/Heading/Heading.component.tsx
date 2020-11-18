import React, { Fragment } from 'react'

import {
  HeadingPrimary, HeadingSecondary, HeadingTertiary
} from './Heading.styles'

interface HeadingProps {
  type?: 'Primary' | 'Secondary' | 'Tertiary'
}

const Heading: React.FC<HeadingProps> = props => {
  const { type = 'Primary', children } = props

  return (
    <Fragment>
      {type === 'Primary' ? (
        <HeadingPrimary>
          {children}
        </HeadingPrimary>
      ) : type === 'Secondary' ? (
        <HeadingSecondary>
          {children}
          <div />
        </HeadingSecondary>
      ) : type === 'Tertiary' && (
        <HeadingTertiary>
          {children}
        </HeadingTertiary>
      )}
    </Fragment>
  )
}

export default Heading
