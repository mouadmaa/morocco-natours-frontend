import styled, { css } from 'styled-components'

export const ToursCardsContainer = styled.section`
  background-color: ${({ theme }) => theme.color.grayLight1};
  padding: 15rem 5vw 12rem;
  margin-top: -6rem;

  @media only screen and (max-width: 56.25em) {
    padding: 20rem 5vw 10rem;
  }
`
export const ToursCardsTitleContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    margin: 4rem 0 6rem;
  }
`

export const ToursCardsContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 4rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`

export const TourCardContainer = styled.div`
  perspective: 150rem;
  position: relative;
  height: 52rem;
  width: 100%;
  max-width: 36rem;

  :hover div:first-of-type {
    transform: rotateY(-180deg);

    @media only screen and (max-width: 56.25em),
    only screen and (hover: none) {
      transform: rotateY(0);
    }
  }

  :hover div:last-of-type {
    transform: rotateY(0);
  }

  @media only screen and (max-width: 56.25em),
  only screen and (hover: none) {
    height: auto;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.grayLight1};
    box-shadow: ${({ theme }) => theme.shadowLight};

    :nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`

const cardSideStyles = css`
  height: 52rem;
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadowLight};

  @media only screen and (max-width: 56.25em),
  only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
  }
`

export const CardSideFrontContainer = styled.div`
  ${cardSideStyles}
  background-color: ${({ theme }) => theme.color.grayLight1};

  div:first-of-type {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8)), url(${({ image }: { image: string }) => image});
    transition: all 0.8s ease;
  }

  h3 {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: ${({ theme }) => theme.color.grayLight1};
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;

    span {
      padding: 1rem 1.5rem;
      box-decoration-break: clone;
      background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
    }
  }
`

export const CardTourDetailsContainer = styled.div`
  padding: 3rem;

  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;
    }

    li:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.grayLight3};
    }
  }

  @media only screen and (max-width: 56.25em),
  only screen and (hover: none) {
    padding: 1rem 3rem;
  }
`

export const CardTourBooking = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    text-align: center;
    color: ${({ theme }) => theme.color.grayLight1};
    margin-bottom: 8rem;

    p:first-of-type {
      font-size: 1.8rem;
      text-transform: uppercase;

      @media only screen and (max-width: 56.25em),
      only screen and (hover: none) {
        margin-bottom: 1rem;
      }
    }

    p:last-of-type {
      font-size: 5rem;
      font-weight: 300;

      @media only screen and (max-width: 56.25em),
      only screen and (hover: none) {
        font-size: 4rem;
      }
    }

    @media only screen and (max-width: 56.25em),
    only screen and (hover: none) {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 56.25em),
  only screen and (hover: none) {
    position: relative;
    top: 0%;
    left: 0;
    transform: translate(0);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`

export const CardSideBackContainer = styled.div`
  ${cardSideStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  transform: rotateY(180deg);
  background-color: rgba(8, 174, 234);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));

  @media only screen and (max-width: 56.25em),
  only screen and (hover: none) {
    transform: rotateY(0);
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`

export const ToursCardsButtonContainer = styled.div`
  text-align: center;
  margin-top: 6rem;
`
