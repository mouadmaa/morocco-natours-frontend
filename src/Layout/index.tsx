import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../hooks/useAuthHook'

import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'
import Footer from './Footer/Footer.component'
import Navigation from './Navigation/Navigation.component'

const Layout: FC = props => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default Layout
