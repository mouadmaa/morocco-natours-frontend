import { useCallback, useEffect, useState } from 'react'
import { useFetch } from 'use-http'
import { toast } from 'react-toastify'
import constate from 'constate'

import { User } from '../models/userModel'
import { setAccessToken } from '../utils/useHttpOptions'

const useAuth = () => {
  const [user, setUser] = useState<User>()

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
      cache.clear()
      setUser(undefined)
      setAccessToken('')
      deleteUserFromLocalStorage()
    },
    []
  )

  const updateUser = useCallback(
    async (formData: FormData) => {
      cache.clear()
      const response = await patch('/users/me', formData)
      if (response.name) {
        setUser(response)
        setUserOnLocalStorage(response.user)
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
        setUserOnLocalStorage(response.user)
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
        const storedUser = getUserFromLocalStorage()
        if (!storedUser) return
        setUser(storedUser)

        try {
          const response = await post('/users/refreshToken') as UserResponse
          handleResponse(response, false)
        } catch {
          setUser(undefined)
          setAccessToken('')
          deleteUserFromLocalStorage()
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

const getUserFromLocalStorage = () => {
  const expiration = localStorage.getItem('expiration')
  if (!expiration || new Date(expiration) <= new Date()) {
    deleteUserFromLocalStorage()
  } else {
    const user = localStorage.getItem('user')
    if (user) return JSON.parse(user) as User
  }
}

const setUserOnLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('expiration', new Date(new Date().setHours(24 * 7)).toISOString())
}

const deleteUserFromLocalStorage = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('expiration')
}

export interface UserResponse {
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
