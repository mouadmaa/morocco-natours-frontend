import styled, { css } from 'styled-components'

export const SectionBookingContainer = styled.div`
  margin-top: calc(0px - 9vw);
  padding: 3rem;
  padding-bottom: 11rem;
  padding-top: calc(15rem + 9vw);
  background-color: #f7f7f7;
`

export const BookingContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 105rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grayLight1};
  padding: 9rem 5rem 9rem 21rem;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadowDark};

  @media only screen and (max-width: 56.25em) {
    padding: 15rem 5rem 5rem;
  }
`

interface Image { index: number }
const getIndexImage = (image: Image) => {
  return image.index === 0 ? css`
    z-index: 10;
    transform: translate(-35%, -50%);
  ` : image.index === 1 ? css`
    transform: translate(-10%, -50%) scale(0.97);
    z-index: 9;
  ` : css`
    transform: translate(15%, -50%) scale(0.94);
    z-index: 8;
  `
}

export const BookingImage = styled.img`
  height: 15rem;
  width: 15rem;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 50%;
  box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
  transform: translate(-10%, -50%) scale(0.97);
  ${getIndexImage}

  @media only screen and (max-width: 56.25em) {
    top: 10%;
    left: 40%;
  }
`

export const BookingContentContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  grid-auto-flow: column;
  align-items: center;

  > a {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }

  h2 div {
    display: none;
  }

  @media only screen and (max-width: 56.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const BookingText = styled.p`
  font-size: 1.9rem;
  font-weight: 400;

  @media only screen and (max-width: 56.25em) {
    display: inline-block;
    margin: 2rem auto;
  }
`


