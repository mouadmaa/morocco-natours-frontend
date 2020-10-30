import styled from 'styled-components'

export const OverviewContent = styled.div`
  padding: 8rem 5vw 10rem;
  max-width: 150rem;
  min-height: 80vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  place-items: center;
  grid-gap: 10rem 4rem;

  @media only screen and (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
    rid-gap: 8rem;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
  }
`

export const OverviewHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  h2 {
    font-size: 3.6rem;
    font-weight: 600;
    text-shadow: ${({ theme }) => theme.shadowDark};
  }

  @media only screen and (max-width: 56.25em) {
    margin-top: 10rem;
  }
`
