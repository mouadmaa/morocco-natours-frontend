import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const FeaturesContainer = styled(BackgroundImage)`
  padding: 20rem 5vw;
  background-color: rgba(8, 174, 234, 0.8);
  background-size: cover;
  transform: skewY(-5deg);

  > * {
    transform: skewY(5deg);
  }

  @media only screen and (max-width: 56.25em) {
    padding: 15rem 5vw;
  }
`

export const FeaturesContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-gap: 4rem;

  @media only screen and (max-width: 75em) {
    grid-template-columns: repeat(3, 1fr);

    :nth-child(4) {
      grid-column: 1 / -1;
    }
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`

export const FeatureBoxContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadowLight};
  transition: 0.4s;

  @media only screen and (max-width: 56.25em) {
    padding: 2rem;
  }

  :hover {
    transform: translateY(-1rem) scale(1.02);
  }

  @media only screen and (max-width: 75em) {
    :nth-child(4) {
      grid-column: 1 / -1;
    }
  }

  @media only screen and (max-width: 56.25em) {
    :nth-child(4) {
      grid-column: auto;
    }
  }

  img {
    width: 6rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    @media only screen and (max-width: 56.25em) {
      margin-bottom: 0;
    }
  }

  h3 {
    margin: 0 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.grayDark2};
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }
`
