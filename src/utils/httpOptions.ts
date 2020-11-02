import axios from 'axios'
import JwtDecode from 'jwt-decode'
import { IncomingOptions } from 'use-http'

export const httpOptions: IncomingOptions = {
  credentials: 'include',
  headers: {
    authorization: `Bearer ${typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('accessToken')) : ''}`
  },
  interceptors: {
    request: async ({ options }) => {
      let accessToken = JSON.parse(localStorage.getItem('accessToken'))
      if (!accessToken) return options
      const { exp } = JwtDecode(accessToken)
      if (Date.now() >= exp * 1000) {
        const { data } = await axios.post(
          `${process.env.GATSBY_BACKEND_API_URL}/users/refreshToken`
          , null, { withCredentials: true }
        )
        if (data.user && data.accessToken) {
          accessToken = data.accessToken
          localStorage.setItem('accessToken', JSON.stringify(accessToken))
        }
      }
      options.headers['authorization'] = `Bearer ${accessToken}`
      return options
    },
  },
}
