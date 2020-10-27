import styled, { css, keyframes } from 'styled-components'

const headingStyles = css`
  color: ${({ theme }) => theme.color.grayLight1};
  text-transform: uppercase;
  backface-visibility: hidden;
  font-weight: 300;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    box-decoration-break: clone;
    background-color: ${({ theme }) => theme.color.tertiaryLight};
    background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
  }
`

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
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
    animation: ${moveInLeft} 1s ease-out;

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
    animation: ${moveInRight} 1s ease-out;

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
  background-color: ${({ theme }) => theme.color.tertiaryLight};
  background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
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
