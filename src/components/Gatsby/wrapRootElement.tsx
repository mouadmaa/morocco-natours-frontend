import React, { FC } from 'react'
import { WrapRootElementBrowserArgs } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Provider as HttpProvider } from 'use-http'

import theme from '../../styles/theme'
import { AuthProvider } from '../../hooks/useAuthHook'

const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <HttpProvider
        url={process.env.GATSBY_BACKEND_API_URL}
      >
        <AuthProvider>
          {element}
        </AuthProvider>
      </HttpProvider>
    </ThemeProvider>
  )
}

export default wrapRootElement
