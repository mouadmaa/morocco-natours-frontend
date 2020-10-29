import React, { FC, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'
import Footer from './Footer/Footer.component'
import Navigation from './Navigation/Navigation.component'

const Layout: FC = props => {
  const { children } = props

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
