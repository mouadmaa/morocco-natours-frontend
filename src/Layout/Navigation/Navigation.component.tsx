import React, { FC, Fragment, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import {
  NavigationContainer, NavigationContentContainer, NavigationListContainer,
  NavigationItemContainer, NavigationLoginContainer, NavigationTitleContainer,
  NavigationSignupContainer, NavigationProfileContainer
} from './Navigation.styles'
import { useAuthContext } from '../../hooks/useAuthHook'

interface Navigation {
  id: string
  name: string
  href: string
  onClick?: () => void
}

const Navigation: FC = () => {
  const data = useStaticQuery(query)

  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(!checked)

  const { user, logout } = useAuthContext()

  const navigation: Navigation[] = [
    { id: '01', name: 'Home', href: '/' },
    { id: '02', name: 'Tours', href: '/overview' },
  ]

  if (user) {
    navigation.push(
      { id: '03', name: 'Profile', href: '/profile' },
      { id: '04', name: 'My Booking', href: '/my-booking' },
      { id: '05', name: 'Logout', href: '/', onClick: logout },
    )
  } else {
    navigation.push(
      { id: '03', name: 'Login', href: '/login' },
      { id: '04', name: 'Signup', href: '/signup' },
    )
  }

  return (
    <NavigationContainer>
      <NavigationTitleContainer
        to='/'
      >
        <h1>Morocco Natours</h1>
      </NavigationTitleContainer>

      {user ? (
        <NavigationProfileContainer
          to='/profile'
        >
          <img
            src={user.photo ? user.photo
              : data.userSvg.publicURL}
            alt='User Photo'
          />
          <h3>{user.name}</h3>
        </NavigationProfileContainer>
      ) : (
          <Fragment>
          <NavigationLoginContainer
            to='/login'
          >
            <h3>Login</h3>
            </NavigationLoginContainer>
          <NavigationSignupContainer
            to='/signup'
          >
            <h3>Signup</h3>
          </NavigationSignupContainer>
          </Fragment>
        )}

      <input
        id='nav-toggle'
        type='checkbox'
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor='nav-toggle'>
        <span>&nbsp;</span>
      </label>
      <div>&nbsp;</div>

      <NavigationContentContainer
        onClick={() => setChecked(false)}
      >
        <NavigationListContainer>
          {navigation.map(nav => (
            <NavigationItemContainer
              key={nav.id}
            >
              <Link
                to={nav.href}
                onClick={nav.onClick}
              >
                <span>{nav.id}</span>
                {nav.name}
              </Link>
            </NavigationItemContainer>
          ))}
        </NavigationListContainer>
      </NavigationContentContainer>
    </NavigationContainer>
  )
}

export default Navigation

const query = graphql`
  {
    userSvg: file(relativePath: {eq: "user.svg"}) {
      publicURL
    }
  }
`
