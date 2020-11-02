import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

export const UserMenuContainer = styled.nav`
  flex: 32rem 0 0;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  padding: 4rem 0;
`

const listStyles = css`
  list-style: none;

  img {
    height: 1.9rem;
    width: 1.9rem;
    margin-right: 2rem;
  }
`

export const UserList = styled.ul`
  ${listStyles}
`

export const AdminList = styled.ul`
  ${listStyles}
`

const activeStyles = css`
  border-left: 4px solid ${({ theme }) => theme.color.grayLight1} !important;

  a {
    transform: translateX(-3px);
  }
`

interface MenuItem { active?: boolean }
const getMenuItemStyles = (item: MenuItem) => {
  return item.active && activeStyles
}

const itemStyles = css`
  margin: 1rem 0;
  border-left: 0 solid ${({ theme }) => theme.color.grayLight1};
  transition: all 0.3s;

  :hover {
    border-left: 4px solid ${({ theme }) => theme.color.grayLight1} !important;
  }

  ${getMenuItemStyles}
`

export const UserItem = styled.li`
  ${itemStyles}
`

export const AdminItem = styled.li`
  ${itemStyles}
`

const itemLinkStyles = css`
  :link,
  :visited {
    padding: 1rem 4rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.grayLight1};
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    transition: all 0.3s;
  }

  :hover,
  :active {
    transform: translateX(3px);
  }
`

export const UserItemLink = styled(Link)`
  ${itemLinkStyles}
`

export const AdminItemLink = styled(Link)`
  ${itemLinkStyles}
`

export const AdminContainer = styled.div`
  margin-top: 5.5rem;
`

export const AdminHeading = styled.h5`
  margin: 0 5rem 1.5rem 4rem;
  padding-bottom: 3px;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.grayLight1};
  border-bottom: 1px solid currentColor;
`
