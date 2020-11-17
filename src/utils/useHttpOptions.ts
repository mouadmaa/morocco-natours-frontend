import axios from 'axios'
import JwtDecode from 'jwt-decode'
import { IncomingOptions } from 'use-http'

let accessToken = ''
export const setAccessToken = (newAccessToken: string) => accessToken = newAccessToken
export const getAccessToken = () => accessToken

export const useHttpOptions: IncomingOptions = {
  credentials: 'include',
  headers: {
    authorization: `Bearer ${getAccessToken()}`
  },
  interceptors: {
    request: async ({ options }) => {
      let accessToken = getAccessToken()
      if (!accessToken) return options
      const { exp } = JwtDecode(accessToken)
      if (Date.now() >= exp * 1000) {
        const { data } = await axios.post(
          `${process.env.GATSBY_BACKEND_API_URL}/users/refreshToken`
          , null, { withCredentials: true }
        )
        if (data.user && data.accessToken) {
          accessToken = data.accessToken
          setAccessToken(accessToken)
        }
      }
      options.headers = {
        ...options.headers,
        authorization: `Bearer ${accessToken}`
      }
      return options
    },
  },
}
