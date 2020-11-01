import React, { FC, Fragment } from 'react'
import 'typeface-lato'

import Footer from './Footer/Footer.component'
import Navigation from './Navigation/Navigation.component'

const Layout: FC = props => {
  const { children } = props

  return (
    <Fragment>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
