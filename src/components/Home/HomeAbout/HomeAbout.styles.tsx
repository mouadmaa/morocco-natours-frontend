import styled from 'styled-components'

export const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.color.grayLight1};
  padding: 15rem 5vw 20rem;
  margin-top: -10vh;

  @media only screen and (max-width: 37.25em) {
    padding: 20rem 5vw 0;
  }
`

export const AboutTitleContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    margin: 3rem 4rem 5rem;

    @media only screen and (max-width: 75em) {
      margin-bottom: 0;
    }

    @media only screen and (max-width: 37.25em) {
      font-size: 2.5rem;
      margin: 1rem 0;
    }
  }
`

export const AboutContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(40rem, 1fr));
  place-items: center;

  @media only screen and (max-width: 75em) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`

export const AboutTextContainer = styled.div`
  padding: 2rem 4rem;

  @media only screen and (max-width: 37.25em) {
    padding: 2rem 0;
  }

  @media only screen and (max-width: 21.25em) {
    padding: 0;
  }

  h3 {
    margin: 3rem 1rem .5rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.grayDark2};
    text-transform: uppercase;

    @media only screen and (max-width: 37.25em) {
      margin-top: 2rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;

    @media only screen and (max-width: 37.25em) {
      margin-bottom: 1rem;
    }
  }
`

export const AboutImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  > div {
    width: 50%;
    position: absolute !important;
    box-shadow: ${({ theme }) => theme.shadowLight};
    border-radius: 0.4rem;
    outline-offset: 1.4rem;
    transition: 0.4s;

    :nth-child(1) {
      left: 4%;
      top: 5%;

      @media screen and (max-width: 75em) {
        left: 0;
        top: 15%;
      }
    }

    :nth-child(2) {
      right: 0;
      top: 16%;

      @media screen and (max-width: 75em) {
        right: 0;
        top: 15%;
      }
    }

    :nth-child(3) {
      left: 20%;
      top: 36%;

      @media screen and (max-width: 75em) {
        left: 30%;
        top: 10%;
      }
    }

    :hover {
      outline: 1.2rem solid ${({ theme }) => theme.color.primary};
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: ${({ theme }) => theme.shadowDark};
      z-index: 1;
    }

    @media screen and (max-width: 75em) {
      width: 36%;
    }
  }

  :hover div:not(:hover) {
    transform: scale(0.95);
  }
`
