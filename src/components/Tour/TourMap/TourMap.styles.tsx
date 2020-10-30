import styled from 'styled-components'

export const SectionMapContainer = styled.section`
  position: relative;
  height: 65rem;
  margin-top: calc(0px - 9vw);

  .marker {
    background-image: url(${({ image }: { image: string }) => image});
    background-size: cover;
    width: 32px;
    height: 40px;
    cursor: pointer;
  }

  @media only screen and (max-width: 37.5em) {
    height: 60vh;
  }
`

export const Map = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`
