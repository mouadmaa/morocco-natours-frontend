import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* @import 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'; */

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ::selection {
    background-color: #26ca80fb;
    color: #faf9f9;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  @media only screen and (min-width: 90em) {
    html {
      font-size: 75%;
    }
  }

  @media only screen and (max-width: 75em) {
    html {
      font-size: 56.25%;
    }
  }

  @media only screen and (max-width: 56.25em) {
    html {
      font-size: 50%;
    }
  }

  @media only screen and (max-width: 37.5em) {
    html {
      font-size: 45%;
    }
  }

  body {
    color: ${({ theme }) => theme.color.grayDark2};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    line-height: 1.6;
  }
`

export default GlobalStyles
