import { useState, useCallback, useEffect } from 'react'
import constate from 'constate'

import { User } from '../models/userModel'

export interface AuthHook {
  user?: User
  loading: boolean
  login(user: User, accessToken: string): void
  logout(): void
}

export let accessToken = ''

export const useAuth = (): AuthHook => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)

  const login = (user: User, token: string) => {
    console.log(user, token)
    setUser(user)
    accessToken = token
  }

  const logout = useCallback(() => {
    setUser(undefined)
    accessToken = ''
  }, [])

  useEffect(() => {
    (async () => {
      try {
        // const refreshToken = await (await fetch(
        //   `${process.env.GATSBY_BACKEND_API_URL}/users/refreshToken`,
        //   {
        //     method: 'POST',
        //     credentials: 'include'
        //   }
        // )).json() as RefreshTokenResponse

        // if (refreshToken.success) {
        //   setUser(refreshToken.user)
        //   accessToken = refreshToken.accessToken
        // }

        setLoading(false)
      } catch {
        setLoading(false)
      }
    })()
  }, [])

  return { user, login, loading, logout, }
}

export const AuthProvider = constate(useAuth)[0]
export const useAuthContext = constate(useAuth)[1]
