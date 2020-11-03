import { useCallback, useEffect } from 'react'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'
import constate from 'constate'

import { User } from '../models/userModel'
import { useLocalStorage } from './useLocalStorage'

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

  const updatePassword = useCallback(
    async (userPasswordInputs: UserPasswordInputs) => {
      cache.clear()
      const response = await patch('/users/updateMyPassword', userPasswordInputs) as UserResponse
      return handleResponse(response)
    },
    [],
  )

  const handleResponse = useCallback(
    (response: UserResponse, showMessage: boolean = true) => {
      if (response.user && response.accessToken) {
        setUser(response.user)
        setAccessToken(response.accessToken)
        return true
      } else if (showMessage) {
        toast.error(response.message)
        return false
      }
    },
    [],
  )

  useEffect(
    () => {
      (async () => {
        if (!user) return
        try {
          const response = await post('/users/refreshToken') as UserResponse
          handleResponse(response, false)
        } catch {
          setUser(null)
          setAccessToken(null)
        }
      })()
    },
    []
  )

  return { user, login, signup, logout, updateUser, updatePassword }
}

export const [
  AuthProvider,
  useAuthContext
] = constate(useAuth)


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

export interface UserPasswordInputs {
  passwordCurrent: string
  passwordNew: string
  passwordConfirm: string
}
