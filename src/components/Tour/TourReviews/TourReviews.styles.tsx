import styled from 'styled-components'

export const SectionReviewsContainer = styled.section`
  margin-top: calc(0px - 9vw);
  padding: calc(5rem + 9vw) 0;
  position: relative;
  z-index: 1000;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  clip-path: polygon(0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100%);
`

export const ReviewsContainer = styled.div`
  padding: 5rem 0;
  min-height: 42.8rem;
  display: grid;
  grid-column-gap: 6rem;
  grid-auto-flow: column;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  :before, :after {
    content: '';
    width: 2rem;
  }
`

export const ReviewsCard = styled.div`
  width: 30rem;
  padding: 4rem;
  background-color: #f7f7f7;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ReviewsAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const ReviewsAvatarImage = styled.img`
  height: 4.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`

export const ReviewsUser = styled.h6`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`

export const ReviewsText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 400;
`

export const ReviewsRating = styled.div`
  margin-top: auto;
  display: flex;

  & > img {
    height: 2.6rem;
    width: 2.6rem;
    margin-right: 1px;
  }
`
