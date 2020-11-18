import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  :after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(315deg, transparent,  rgba(0, 0, 0, 0.1));
    /* background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.6), rgba(42, 245, 152, 0.6)); */
    z-index: 25;
  }

  > div:nth-of-type(2) {
    position: absolute !important;
    width: 650px;
    bottom: -100px;
    left: -70px;
    z-index: 20;

    @media only screen and (min-width: 90em) {
      width: 65rem;
    }

    @media only screen and (max-width: 37.5em) {
      left: -60%;
    }
  }

  > div:nth-of-type(3) {
    position: absolute !important;
    bottom: -100px;
    width: 1500px;
    right: 0;
    z-index: 19;

    @media only screen and (min-width: 90em) {
      width: 100%;
    }
  }

  > div:nth-of-type(4) {
    position: absolute !important;
    width: 1100px;
    bottom: -100px;
    left: 0;
    z-index: 18;

    @media only screen and (min-width: 90em) {
      width: 80%;
    }
  }

  > div:nth-of-type(5) {
    position: absolute !important;
    width: 900px;
    bottom: 150px;
    right: 0;
    z-index: 17;

    @media only screen and (min-width: 90em) {
      width: 70%;
    }
  }

  > div:nth-of-type(6) {
    position: absolute !important;
    width: 2100px;
    bottom: 250px;
    right: 0;

    @media only screen and (min-width: 100em) {
      width: 100%;
      height: auto !important;
    }

    @media only screen and (min-width: 80em) {
      height: 80%;
      top: 0;
      bottom: 0;
    }
  }
`

export const HeaderTextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 30;

  a {
    opacity: 0.9;
    color:  rgba(0, 0, 0, 0.6);
    padding: 0.8rem 2.5rem;
    font-size: 1.4rem;
  }
`
