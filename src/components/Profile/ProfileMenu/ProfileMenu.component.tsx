import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
  UserMenuContainer, UserList, UserItem, UserItemLink,
  AdminContainer, AdminHeading, AdminList, AdminItemLink, AdminItem
} from './ProfileMenu.styles'
import { User } from '../../../models/userModel'

interface ProfileMenuProps {
  user?: User
}

const ProfileMenu: FC<ProfileMenuProps> = props => {
  const { user } = props
  const data = useStaticQuery(query)

  const userItems = [
    { name: 'Settings', icon: data.settingsSvg.publicURL, href: '/profile' },
    { name: 'My Bookings', icon: data.briefcaseSvg.publicURL, href: '/my-bookings' },
    { name: 'My Reviews', icon: data.starSvg.publicURL, href: '/profile' },
    { name: 'Billing', icon: data.creditCardSvg.publicURL, href: '/profile' },
  ]

  const adminItems = [
    { name: 'Manage Tours', icon: data.mapSvg.publicURL, href: '/profile' },
    { name: 'Manage Users', icon: data.peopleSvg.publicURL, href: '/profile' },
    { name: 'Manage Reviews', icon: data.starSvg.publicURL, href: '/profile' },
    { name: 'Manage Bookings', icon: data.briefcaseSvg.publicURL, href: '/profile' },
  ]

  return (
    <UserMenuContainer>
      <UserList>
        {userItems.map(item => (
          <UserItem
            key={item.name}
            active={item.name === 'Settings'}
          >
            <UserItemLink to={item.href}>
              <img src={item.icon} alt={item.name} />
              {item.name}
            </UserItemLink>
          </UserItem>
        ))}
      </UserList>
      {user?.role === 'admin' && (
        <AdminContainer>
          <AdminHeading>Admin</AdminHeading>
          <AdminList>
            {adminItems.map(item => (
              <AdminItem key={item.name}>
                <AdminItemLink to={item.href}>
                  <img src={item.icon} alt={item.name} />
                  {item.name}
                </AdminItemLink>
              </AdminItem>
            ))}
          </AdminList>
        </AdminContainer>
      )}
    </UserMenuContainer>
  )
}

export default ProfileMenu

const query = graphql`
  {
    settingsSvg: file(relativePath: {eq: "settings.svg"}) {
      publicURL
    }
    briefcaseSvg: file(relativePath: {eq: "briefcase.svg"}) {
      publicURL
    }
    starSvg: file(relativePath: {eq: "star.svg"}) {
      publicURL
    }
    creditCardSvg: file(relativePath: {eq: "credit-card.svg"}) {
      publicURL
    }
    mapSvg: file(relativePath: {eq: "map.svg"}) {
      publicURL
    }
    peopleSvg: file(relativePath: {eq: "people.svg"}) {
      publicURL
    }
  }
`
