import React, { FC, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../hooks/useAuthHook'

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
        <AuthProvider>
          <Navigation />
          {children}
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
