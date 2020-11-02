import { useCallback, useEffect } from 'react'
import constate from 'constate'
import { useFetch } from 'use-http'
import { useLocalStorage } from '@rehooks/local-storage'

import { User } from '../models/userModel'

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
        const data = await post('/users/refreshToken')
        if (data.user, data.accessToken) {
          login(data.user, data.accessToken)
        }
        const user = await get('users/me')
        console.log(user)
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
