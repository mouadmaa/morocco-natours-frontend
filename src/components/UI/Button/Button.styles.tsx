import styled, { css, keyframes } from 'styled-components'
import { Link } from 'gatsby'

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(8rem);
  }
  80% {
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const buttonStyles = css`
  :link,
  :visited {
    font-size: 1.6rem;
    padding: 1.2rem 3rem;
    border-radius: 10rem;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: all 0.4s;
    font-weight: 400;
    backface-visibility: hidden;
    box-shadow: ${({ theme }) => theme.shadowLight};
    border: none;
    cursor: pointer;
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadowDark};
  }

  :active {
    transform: translateY(-1px);
  }

  :focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`

const buttonWhiteStyles = css`
  background-color: ${({ theme }) => theme.color.grayLight1};
  color: ${({ theme }) => theme.color.grayDark2};
  animation: ${moveInBottom} 0.5s ease-out 0.75s backwards;

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
    transition: all 0.4s;
  }

  ::after {
    background-color: ${({ theme }) => theme.color.grayLight1};
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadowDark};;
  }

  :hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  :focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.grayLight1};
  }
`

const buttonGreenStyles = css`
  color: ${({ theme }) => theme.color.grayLight1};
  background-color: ${({ theme }) => theme.color.tertiaryLight};
  background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
  background-position: 100% 0;
  background-size: 200% 200%;
  transition-delay: 0.5s;

  ::after {
    background-color: ${({ theme }) => theme.color.primary};
  }

  :hover {
    background-image: linear-gradient(315deg, ${({ theme }) => theme.color.primaryLight} 0%, ${({ theme }) => theme.color.tertiaryLight} 100%);
    background-position: 0 50%;
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
  :link,
  :visited {
    background-color: ${({ theme }) => theme.color.tertiaryLight};
    background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
    background-position: 100% 0;
    background-size: 200% 200%;
    color: ${({ theme }) => theme.color.grayLight1};
    font-size: 1.4rem;
    padding: 1.25rem 3rem;
    border-radius: 10rem;
    text-transform: uppercase;
    position: relative;
    transition: all 0.4s;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    border: none;
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadowDark};
    background-position: 0 0;
  }

  :active {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadowLight};
  }

  :focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`

export const LinkTextContainer = styled(Link)`
  :link,
  :visited {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.primaryLight};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryLight};
    padding: 3px 6px;
    transition: all 0.4s;
  }

  :hover {
    color: ${({ theme }) => theme.color.grayLight1};
    background-color: ${({ theme }) => theme.color.tertiaryLight};
    background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
    box-shadow: ${({ theme }) => theme.shadowDark};
    transform: translateY(-2px);
  }

  :active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.shadowLight};
  }

  :focus {
    outline: none;
    outline: 3px solid ${({ theme }) => theme.color.primaryLight};
    outline-offset: 3px;
  }
`
