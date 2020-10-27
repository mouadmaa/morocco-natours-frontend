import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const HeaderContainer = styled(BackgroundImage)`
  height: 80vh;
  background-color: rgba(8, 174, 234, 0.8);
  background-size: cover;
  background-position: center;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  height: 95vh;
`

export const HeaderTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
