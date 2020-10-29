import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.grayDark3};
  min-height: 12rem;
  padding: 3rem 5rem;
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 50em) {
    flex-direction: column;
    justify-content: center;
    min-height: 18rem;
  }
`

const linkStyles = css`
  a {
    color: ${({ theme }) => theme.color.grayLight3};
    letter-spacing: 0.15rem;
    text-decoration: none !important;
    transition: all 0.3s;

    :hover, :active {
      color: #55c57a;
    }
  }
`

export const FooterNavContainer = styled.ul`
  list-style: none;
  display: flex;
  ${linkStyles}

  li {
    margin-left: 1.5rem;
  }

  @media only screen and (max-width: 50em) {
    margin-bottom: 2rem;
  }
`

export const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.color.grayLight3};
  letter-spacing: 0.15rem;
  ${linkStyles}

  a {
    font-weight: 600;

    @media only screen and (max-width: 50em) {
      display: block;
    }
  }
`
