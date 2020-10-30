import styled, { css } from 'styled-components'

export const SectionPicturesContainer = styled.section`
  display: flex;
  min-height: 30rem;
  clip-path: polygon(0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100%);
  margin-top: calc(0px - 9vw);
  position: relative;
  z-index: 1000;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`

export const PictureBoxContainer = styled.div``

interface Picture { num: number }
const getPictureImageStyles = (picture: Picture) => {
  return picture.num === 0 ? css`padding-top: 15%;`
    : picture.num === 1 ? css`padding-bottom: 15%;`
      : css`padding-bottom: 27%;`
}

export const PictureBoxImage = styled.img`
  display: block;
  width: 100%;
  height: 110%;
  object-fit: cover;
  ${getPictureImageStyles}

  @media only screen and (max-width: 37.5em) {
    padding: 0;
  }
`
