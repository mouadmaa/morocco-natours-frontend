import { useState, useCallback } from 'react'
import constate from 'constate'

import { User } from '../models/userModel'
import { setAccessToken } from '../utils/accessToken'

const useAuth = () => {
  const [user, setUser] = useState<User>()
  console.log(user)

  const login = useCallback(
    (user: User, accessToken: string) => {
      setUser(user)
      setAccessToken(accessToken)
    },
    [],
  )

  const logout = useCallback(
    () => {
      setUser(undefined)
      setAccessToken('')
    },
    []
  )

  return { user, login, logout, }
}

export const [
  AuthProvider,
  useAuthContext
] = constate(useAuth)
