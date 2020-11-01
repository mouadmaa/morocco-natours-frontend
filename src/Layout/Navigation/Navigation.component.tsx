import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'

import {
  NavigationContainer, NavigationContentContainer, NavigationListContainer,
  NavigationItemContainer, NavigationLoginContainer, NavigationTitleContainer, NavigationSignupContainer
} from './Navigation.styles'
import { useAuthContext } from '../../hooks/useAuthHook'

const Navigation = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(!checked)

  const { user } = useAuthContext()

  const navigation = [
    { id: '01', name: 'Home', href: '/' },
    { id: '02', name: 'Tours', href: '/overview' },
  ]

  if (user) {
    navigation.push(
      { id: '03', name: 'Profile', href: '/profile' },
      { id: '04', name: 'Logout', href: '/logout' },
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
        <NavigationLoginContainer
          to='/profile'
        >
          <h3>{user.name}</h3>
        </NavigationLoginContainer>
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
              <Link to={nav.href}>
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
