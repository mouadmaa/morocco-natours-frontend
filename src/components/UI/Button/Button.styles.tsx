import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const buttonStyles = css`
  &,
  &:link,
  &:visited {
    font-size: 1.6rem;
    padding: 1.4rem 3rem;
    border-radius: 10rem;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: all 0.4s;
    font-weight: 400;
    backface-visibility: hidden;
    border: none;
    cursor: pointer;
  }

  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    background-color: #2e864b;
  }
`

const buttonWhiteStyles = css`
  background-color: #fff;
  color: #777;

  ::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }

  &::after {
    background-color: #fff;
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  :hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:focus {
    outline: none;
    background-color: #fff;
  }
`

const buttonGreenStyles = css`
  color: #fff;
  background-color: #08AEEA;
  background-image: linear-gradient(315deg, #08AEEA 0%, #2AF598 70%);
  background-position: 100% 0;
  background-size: 200% 200%;

  &::after {
    background-color: #55c57a;
  }

  &:hover {
    background-position: 0 0;
  }
`

interface Button {
  color: 'green' | 'white'
}

const getButtonStyles = (button: Button) => {
  return button.color === 'green' ? buttonGreenStyles : buttonWhiteStyles
}

export const ButtonContainer = styled.button`
  ${buttonStyles}
  ${getButtonStyles}
`

export const ButtonLinkContainer = styled(Link)`
  ${buttonStyles}
  ${getButtonStyles}
`

export const ButtonSmallContainer = styled.button`
  &,
  &:link,
  &:visited {
    /* background-color: #55c57a; */
    background-color: #08AEEA;
    background-image: linear-gradient(315deg, #08AEEA 0%, #2AF598 70%);
    background-position: 100% 0;
    background-size: 200% 200%;
    color: #fff;
    font-size: 1.4rem;
    padding: 1.25rem 3rem;
    border-radius: 10rem;
    text-transform: uppercase;
    position: relative;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    border: none;
  }

  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    background-position: 0 0;
  }

  &:active {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    background-color: #2e864b;
  }
`

export const LinkTextContainer = styled(Link)`
  &,
  &:link,
  &:visited {
    font-size: 1.6rem;
    color: #2AF598;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #2AF598;
    padding: 3px 6px;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }

  &:hover {
    color: #fff;
    background-color: #08AEEA;
    background-image: linear-gradient(315deg, #08AEEA 0%, #2AF598 70%);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  &:active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    outline: 3px solid #2AF598;
    outline-offset: 3px;
  }
`
