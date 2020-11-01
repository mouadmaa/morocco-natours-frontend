import { useState, useCallback } from 'react'
import constate from 'constate'

import { User } from '../models/userModel'

export let accessToken = ''

export const useAuth = () => {
  const [user, setUser] = useState<User>()

  const login = useCallback(
    (user: User, token: string) => {
      console.log(user, token)
      setUser(user)
      accessToken = token
    },
    [],
  )

  const logout = useCallback(
    () => {
      setUser(undefined)
      accessToken = ''
    },
    []
  )

  return { user, login, logout, }
}

export const [
  AuthProvider,
  useAuthContext
] = constate(useAuth)
