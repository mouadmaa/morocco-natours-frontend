import styled from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowLight};
  background-color: ${({ theme }) => theme.color.grayLight1};
  transition: 0.3s all;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  max-height: 54.5rem;
  max-width: 450px;
`

export const CardHeaderContainer = styled.div`
  position: relative;

  h3 {
    font-size: 2.75rem;
    font-weight: 300;

    span {
      opacity: 0.9;
      background-color: rgba(8, 174, 234, 0.8);
      background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
    }
  }
`

export const CardPictureContainer = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;
`

export const CardPictureOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  opacity: 0.7;
`

export const CardPictureImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const CardDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
`

export const CardSubHeading = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / -1;
`

export const CardText = styled.p`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
`

export const CardDataContainer = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  > img {
    height: 2.6rem;
    width: 2.6rem;
    margin-right: 0.7rem;
  }
`

export const CardFooterContainer = styled.div`
  background-color: ${({ theme }) => theme.color.grayLight1};
  padding: 2.5rem 3rem;
  border-top: 1px solid ${({ theme }) => theme.color.grayLight2};
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;

  > a {
    grid-row: 1 / 3;
    justify-self: end;
    align-self: center;
  }
`

export const CardFooterValue = styled.span`
  font-weight: 600;
`

export const CardFooterText = styled.span`
  color: ${({ theme }) => theme.color.grayDark1};
`

export const CardRatings = styled.p`
  grid-row: 2 / 3;
`
