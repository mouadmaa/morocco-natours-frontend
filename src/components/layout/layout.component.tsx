import React, { FC, Fragment } from 'react'

import GlobalStyles from '../../styles/globalStyles'
import theme from '../../styles/theme'
import Navigation from './Navigation/navigation.component'

const Layout: FC = props => {
  const { children } = props

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Navigation />
      {children}
    </Fragment>
  )
}

export default Layout
