import React, { FC, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../styles/globalStyles'
import theme from '../../styles/theme'
import Navigation from './Navigation/navigation.component'

const Layout: FC = props => {
  const { children } = props

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        {children}
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
