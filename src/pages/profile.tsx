import React, { FC } from 'react'
import { navigate } from 'gatsby'

import { ProfileContainer, UserViewContainer } from '../components/Profile/profile.styles'
import ProfileMenu from '../components/Profile/ProfileMenu/ProfileMenu.component'
import UserSettings from '../components/Profile/UserSettings/UserSettings.component'
import { useAuthContext } from '../hooks/useAuthHook'

const Profile: FC = () => {
  const { user } = useAuthContext()
  if (!user) navigate('/login')

  return (
    <ProfileContainer>
      <UserViewContainer>
        <ProfileMenu user={user} />
        <UserSettings />
      </UserViewContainer>
    </ProfileContainer>
  )
}

export default Profile
