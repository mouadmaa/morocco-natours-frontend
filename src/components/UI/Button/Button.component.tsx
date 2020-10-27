import React, { Fragment } from 'react'

import {
  ButtonContainer, ButtonLinkContainer, ButtonSmallContainer, LinkTextContainer
} from './Button.styles'

interface ButtonButton {
  onClick?: (event: React.MouseEvent) => void
  type?: 'button' | 'buttonLink' | 'buttonSmall' | 'linkText'
  color?: 'green' | 'white'
  to?: string
}

const Button: React.FC<ButtonButton> = props => {
  const { type = 'button', color = 'green', to, onClick, children } = props

  return (
    <Fragment>
      {type === 'button' ? (
        <ButtonContainer color={color} onClick={onClick}>
          {children}
        </ButtonContainer>
      ) : type === 'buttonLink' ? (
        <ButtonLinkContainer to={to} color={color} onClick={onClick}>
          {children}
        </ButtonLinkContainer>
      ) : type === 'buttonSmall' ? (
        <ButtonSmallContainer onClick={onClick}>
          {children}
        </ButtonSmallContainer>
      ) : type === 'linkText' && (
        <LinkTextContainer to={to} onClick={onClick}>
          {children}
        </LinkTextContainer>
      )}
    </Fragment>
  )
}

export default Button
