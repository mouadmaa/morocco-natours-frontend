import React, { FC, Fragment, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'

import {
	NavigationContainer,
	NavigationContentContainer,
	NavigationListContainer,
	NavigationItemContainer,
	NavigationLoginContainer,
	NavigationTitleContainer,
	NavigationSignupContainer,
	NavigationProfileContainer,
} from './Navigation.styles'
import Login from '../../components/LoginSignup/Login/Login.component'
import Signup from '../../components/LoginSignup/Signup/Signup.component'
import { useAuthContext } from '../../hooks/useAuthHook'

interface Navigation {
	id: string
	name: string
	href: string
	onClick?: () => void
}

const Navigation: FC = () => {
	const data = useStaticQuery(query)

	const [ showLogin, setShowLogin ] = useState(true)
	const [ showSignup, setShowSignup ] = useState(false)

	const [ checked, setChecked ] = useState(false)
	const handleChange = () => setChecked(!checked)

	const { pathname } = useLocation()
	const { user, logout } = useAuthContext()

	const login = () => {
		setShowLogin(true)
		setShowSignup(false)
	}
	const signup = () => {
		setShowSignup(true)
		setShowLogin(false)
	}

	const navigation: Navigation[] = [
		{ id: '01', name: 'Home', href: '/' },
		{ id: '02', name: 'Tours', href: '/overview' },
	]

	if (user) {
		navigation.push(
			{ id: '03', name: 'Profile', href: '/profile' },
			{ id: '04', name: 'My Bookings', href: '/my-bookings' },
			{ id: '05', name: 'Logout', href: '/', onClick: logout },
		)
	} else {
		navigation.push(
			{
				id: '03',
				name: 'Login',
				href: pathname,
				onClick: login,
			},
			{
				id: '04',
				name: 'Signup',
				href: pathname,
				onClick: signup,
			},
		)
	}

	return (
		<Fragment>
			{!user && showLogin && <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
			{!user && showSignup && <Signup setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}

			<NavigationContainer>
				<NavigationTitleContainer to='/'>
					<h1>Morocco Natours</h1>
				</NavigationTitleContainer>

				{user ? (
					<NavigationProfileContainer to='/profile'>
						<img src={user.photo ? user.photo : data.userSvg.publicURL} alt='User Photo' />
						<span>{user.name}</span>
					</NavigationProfileContainer>
				) : (
					<Fragment>
						<NavigationLoginContainer to={pathname}>
							<span onClick={login}>Login</span>
						</NavigationLoginContainer>
						<NavigationSignupContainer to={pathname}>
							<span onClick={signup}>Signup</span>
						</NavigationSignupContainer>
					</Fragment>
				)}

				<input id='nav-toggle' type='checkbox' onChange={handleChange} checked={checked} />
				<label htmlFor='nav-toggle'>
					<span>&nbsp;</span>
				</label>
				<div>&nbsp;</div>

				<NavigationContentContainer onClick={() => setChecked(false)}>
					<NavigationListContainer>
						{navigation.map((nav) => (
							<NavigationItemContainer key={nav.id}>
								<Link to={nav.href} onClick={nav.onClick}>
									<span>{nav.id}</span>
									{nav.name}
								</Link>
							</NavigationItemContainer>
						))}
					</NavigationListContainer>
				</NavigationContentContainer>
			</NavigationContainer>
		</Fragment>
	)
}

export default Navigation

const query = graphql`
	{
		userSvg: file(relativePath: { eq: "user.svg" }) {
			publicURL
		}
	}
`
