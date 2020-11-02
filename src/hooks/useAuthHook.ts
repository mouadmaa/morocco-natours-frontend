import { useCallback, useEffect } from 'react'
import constate from 'constate'
import { useFetch } from 'use-http'

import { User } from '../models/userModel'
import { useLocalStorage } from './useLocalStorage'

interface RefreshTokenResponse {
  accessToken?: string
  user?: User
}

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null)
  const [, setAccessToken] = useLocalStorage('accessToken', '')

  const { get, post } = useFetch()

  const login = useCallback(
    (user: User, accessToken: string) => {
      setUser(user)
      setAccessToken(accessToken)
    },
    [],
  )

  const logout = useCallback(
    () => {
      setUser(null)
      setAccessToken('')
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

        const me = await get('/users/me') as User
        console.log(me.name)
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
