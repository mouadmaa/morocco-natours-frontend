import React, { FC, Fragment } from 'react'

import GlobalStyles from '../../styles/globalStyles'
import theme from '../../styles/theme'

const Layout: FC = props => {
  const { children } = props

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      {children}
    </Fragment>
  )
}

export default Layout
