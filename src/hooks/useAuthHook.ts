import { useCallback, useEffect } from 'react'
import { navigate } from 'gatsby'
import constate from 'constate'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'

import { User } from '../models/userModel'
import { useLocalStorage } from './useLocalStorage'

interface UserResponse {
  accessToken?: string
  user?: User
  message?: string
}

export interface UserLoginInputs {
  email: string
  password: string
}

export interface UserSignupInputs {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null)
  const [, setAccessToken] = useLocalStorage('accessToken', null)

  const { get, post } = useFetch<UserResponse>()

  const login = useCallback(
    async (userLoginInput: UserLoginInputs) => {
      const response = await post('/users/login', userLoginInput) as UserResponse
      handleResponse(response)
    },
    [],
  )

  const signup = useCallback(
    async (userSignupInput: UserSignupInputs) => {
      const response = await post('/users/signup', userSignupInput) as UserResponse
      handleResponse(response)
    },
    [],
  )

  const logout = useCallback(
    async () => {
      await get('/users/logout')
      setUser(null)
      setAccessToken(null)
    },
    []
  )

  useEffect(
    () => {
      (async () => {
        if (!user) return

        const response = await post('/users/refreshToken') as UserResponse
        if (response.user && response.accessToken) {
          setUser(response.user)
          setAccessToken(response.accessToken)
        }

        const me = await get('/users/me') as User
        console.log(me.name)
      })()
    },
    []
  )

  const handleResponse = useCallback(
    (response: UserResponse) => {
      if (response.user && response.accessToken) {
        setUser(response.user)
        setAccessToken(response.accessToken)
        navigate('/overview', { replace: true })
      } else if (response.message) {
        toast.error(response.message)
      }
    },
    [],
  )

  return { user, login, signup, logout }
}

export const [
  AuthProvider,
  useAuthContext
] = constate(useAuth)
