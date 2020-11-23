import React, { FC } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import { FooterContainer, FooterNavContainer, FooterCopyright } from './Footer.styles'
import { useAuthContext } from '../../hooks/useAuthHook'

const Footer: FC = () => {
	const { pathname } = useLocation()
	const { user } = useAuthContext()

	const navigation = [ { id: '01', name: 'Home', href: '/' }, { id: '02', name: 'Tours', href: '/overview' } ]

	if (user) {
		navigation.push(
			{ id: '03', name: 'Profile', href: '/profile' },
			{ id: '04', name: 'My Bookings', href: '/my-bookings' },
		)
	} else {
		navigation.push({ id: '03', name: 'Login', href: pathname }, { id: '04', name: 'Signup', href: pathname })
	}

	return (
		<FooterContainer>
			<FooterNavContainer>
				{navigation.map((nav) => (
					<li key={nav.id}>
						<Link to={nav.href}>{nav.name}</Link>
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
