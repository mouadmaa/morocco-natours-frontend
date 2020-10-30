import styled from 'styled-components'

export const SectionHeaderContainer = styled.section`
  position: relative;
  height: 80vh;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9vw), 0 100%);

  @media only screen and (max-width: 75em) {
    height: 60vh;
  }
`

export const HeaderHeroContainer = styled.div`
  height: 100%;
`

export const HeaderHeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 174, 234);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  opacity: 0.85;
`

export const HeaderHeroImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: 50% 25%;
`

export const HeadingBoxContainer = styled.div`
  width: 50vw;
  position: absolute;
  bottom: 13vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 37.5em) {
    top: 55%;
  }

  h1 {
    font-weight: 400;
    font-size: 5rem;

    span {
      opacity: 0.8;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 2.6rem;
      margin-bottom: 1rem;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`

export const HeadingBoxGroup = styled.div`
  color: ${({ theme }) => theme.color.grayLight1};
  display: flex;
  margin-top: 3rem;
  align-items: center;
  justify-content: center;

  div {
    @media only screen and (max-width: 37.5em) {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`

export const HeadingBoxDetails = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  text-shadow: ${({ theme }) => theme.shadowLight};

  & > img {
    margin-right: 0.8rem;
    height: 3rem;
    width: 3rem;
    fill: currentColor;
    filter: drop-shadow(0 0.75rem 0.5rem rgba(0, 0, 0, 0.25));
  }
`


