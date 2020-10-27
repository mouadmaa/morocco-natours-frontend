import styled, { css } from 'styled-components'

const headingStyles = css`
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  font-weight: 300;

  & span {
    padding: 1rem 1.5rem;
    line-height: 1;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-image: -webkit-gradient(315deg, #08AEEA 0%, #2AF598 70%);
    background-image: linear-gradient(315deg, #08AEEA 0%, #2AF598 70%);
  }
`

export const HeadingPrimary = styled.h1`
  font-size: 5rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 5rem;
  ${headingStyles}

  div:first-child {
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.6rem;

    @media only screen and (max-width: 37.5em) {
      font-size: 4rem;
      letter-spacing: 0.8rem;
    }
  }

  div:last-child {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    padding-right: 1.6rem;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.8rem;
      padding: 0;
      letter-spacing: .5rem;
    }
  }
`

export const HeadingSecondary = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: -webkit-gradient(315deg, #08AEEA 0%, #2AF598 70%);
  background-image: linear-gradient(315deg, #08AEEA 0%, #2AF598 70%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
`

export const HeadingTertiary = styled.h3`
  font-size: 2.75rem;
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 70%;
  z-index: 10;
  ${headingStyles}
`
