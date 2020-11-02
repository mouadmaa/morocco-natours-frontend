import { useCallback, useEffect } from 'react'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'
import constate from 'constate'

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

  const { get, post, patch, cache } = useFetch<UserResponse>()

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

  const updateUser = useCallback(
    async (formData: FormData) => {
      cache.clear()
      const response = await patch('/users/me', formData)
      if (response.name) {
        setUser(response)
        toast.success('Your changes have been saved')
        return true
      }
      toast.error(response.message)
      return false
    },
    [],
  )

  useEffect(
    () => {
      (async () => {
        if (!user) return
        const response = await post('/users/refreshToken') as UserResponse
        handleResponse(response, false)
      })()
    },
    []
  )

  const handleResponse = useCallback(
    (response: UserResponse, showMessage: boolean = true) => {
      if (response.user && response.accessToken) {
        setUser(response.user)
        setAccessToken(response.accessToken)
      } else if (showMessage) {
        toast.error(response.message)
      }
    },
    [],
  )

  return { user, login, signup, logout, updateUser }
}

export const [
  AuthProvider,
  useAuthContext
] = constate(useAuth)
