import styled from 'styled-components'

export const StoriesContainer = styled.section`
  position: relative;
  padding: 10rem 5vw;

  @media only screen and (max-width: 56.25em) {
    padding: 10rem 5vw;
  }
`

export const StoriesBGImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const StoriesTitleContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`

export const StoryContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
`

export const StoryContainer = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadowLight};
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 5rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    padding: 4rem;
    padding-left: 7rem;
  }

  @media only screen and (max-width: 37.5em) {
    transform: skewX(0);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  :hover figcaption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  :hover img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }
`

export const StoryShapeContainer = styled.figure`
  width: 14rem;
  height: 14rem;
  float: left;
  transform: translateX(-3rem) skewX(12deg);
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    border-radius: none;
  }

  @media only screen and (max-width: 37.5em) {
    transform: translateX(0) skewX(0);
    margin-bottom: 3rem;
    float: none;
  }

  img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    backface-visibility: hidden;
    transition: all .5s;
  }

  figcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: ${({ theme }) => theme.color.grayLight1};
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    backface-visibility: hidden;
  }
`

export const StoryTextContainer = styled.div`
  transform: skewX(12deg);

  @media only screen and (max-width: 37.5em) {
    text-align: center;
    transform: skewX(0);
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.grayDark2};
    text-transform: uppercase;
    margin-bottom: 1.6rem;

    @media only screen and (max-width: 37.5em) {
      margin-bottom: 1.4rem;
    }
  }

  p {
    font-size: 1.4rem;
  }
`

export const StoriesButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`
