import styled from 'styled-components'
import ImageBackground from 'gatsby-background-image'

export const HomeBookingContainer = styled.section`
  padding: 10rem 5vw;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));

  @media only screen and (max-width: 56.25em) {
    padding: 10rem 5vw;
  }
`

export const BookingContentContainer = styled.div`
  margin: 4rem auto;
  max-width: 120rem;
`

export const BookingContainer = styled(ImageBackground)`
  width: 100%;
  background-size: cover;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadowLight};

  ::after {
    background-size: cover !important;
  }

  @media only screen and (max-width: 75em) {
    background-size: cover;
  }
`

export const BookingFormContainer = styled.div`
  width: 50%;
  padding: 6rem;

  @media only screen and (max-width: 75em) {
    width: 65%;
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    padding: 4rem 2.5rem;
  }

  button {
    font-size: 1.4rem !important;
    padding: 1rem 2.6rem !important;
  }
`

export const BookingTitleContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: 400;
    margin: 1rem auto 3rem;
  }
`

export const FormGroupContainer = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }

  p {
    font-size: 1.4rem;
    padding: .5rem 1rem;
  }

  button {
    margin-top: -2rem;
  }
`
