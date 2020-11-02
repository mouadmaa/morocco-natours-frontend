import { useCallback, useEffect } from 'react'
import constate from 'constate'
import { useFetch } from 'use-http'
import { useLocalStorage } from '@rehooks/local-storage'

import { User } from '../models/userModel'

interface RefreshTokenResponse {
  accessToken?: string
  user?: User
}

const useAuth = () => {
  const [user, setUser, deleteUser] = useLocalStorage<User>('user')
  const [, setAccessToken, deleteAccessToken] = useLocalStorage<string>('accessToken')

  const { post, get } = useFetch()

  const login = useCallback(
    (user: User, accessToken: string) => {
      setUser(user)
      setAccessToken(accessToken)
    },
    [],
  )

  const logout = useCallback(
    () => {
      deleteUser()
      deleteAccessToken()
    },
    []
  )

  useEffect(
    () => {
      (async () => {
        const data = await post('/users/refreshToken') as RefreshTokenResponse
        if (data.user, data.accessToken) {
          login(data.user, data.accessToken)
        }
        const user = await get('users/me') as User
        console.log(user.name)
      })()
    },
    []
  )

  return { user, login, logout }
}

export const [
  AuthProvider,
  useAuthContext
] = constate(useAuth)
