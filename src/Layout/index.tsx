import React, { FC, Fragment } from 'react'
import { ToastContainer } from 'react-toastify'

import 'typeface-lato'
import 'react-toastify/dist/ReactToastify.css'

import Footer from './Footer/Footer.component'
import Navigation from './Navigation/Navigation.component'
import GlobalStyles from '../styles/globalStyles'

const Layout: FC = props => {
  const { children } = props

  return (
    <Fragment>
      <GlobalStyles />
      <ToastContainer
        style={{ fontSize: '1.6rem' }}
      />
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
