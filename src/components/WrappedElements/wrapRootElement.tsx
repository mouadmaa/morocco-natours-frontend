import React, { FC } from 'react'
import { WrapRootElementBrowserArgs } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../styles/globalStyles'
import theme from '../../styles/theme'
import { AuthProvider } from '../../hooks/useAuthHook'

const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({ element }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </AuthProvider>
  )
}

export default wrapRootElement
