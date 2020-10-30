import React, { FC } from 'react'
import { Link } from 'gatsby'

import {
  FooterContainer, FooterNavContainer, FooterCopyright
} from './Footer.styles'

const Footer: FC = () => {
  const navigation = [
    { id: '01', name: 'Home', href: '/' },
    { id: '02', name: 'Tours', href: '/overview' },
    { id: '03', name: 'Login', href: '/login' },
    { id: '04', name: 'Signup', href: '/signup' },
  ]

  return (
    <FooterContainer>
      <FooterNavContainer>
        {navigation.map(nav => (
          <li key={nav.id}>
            <Link to={nav.href}>
              {nav.name}
            </Link>
          </li>
        ))}
      </FooterNavContainer>
      <FooterCopyright>
        All Rights Reserved &copy;
        {new Date().getFullYear()}, By{` `}
        <Link to='/'>Mouad Maaroufi</Link>
      </FooterCopyright>
    </FooterContainer>
  )
}

export default Footer
