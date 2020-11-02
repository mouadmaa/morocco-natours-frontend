import axios from 'axios'
import JwtDecode from 'jwt-decode'
import { writeStorage } from '@rehooks/local-storage'
import { IncomingOptions } from 'use-http'

export const httpOptions: IncomingOptions = {
  credentials: 'include',
  headers: {
    authorization: `Bearer ${localStorage.getItem('accessToken')}`
  },
  interceptors: {
    request: async ({ options }) => {
      let accessToken = localStorage.getItem('accessToken')
      const { exp } = JwtDecode(accessToken)
      if (Date.now() >= exp * 1000) {
        const { data } = await axios.post(
          `${process.env.GATSBY_BACKEND_API_URL}/users/refreshToken`
          , null, { withCredentials: true, }
        )
        if (data.user, data.accessToken) {
          accessToken = data.accessToken
          writeStorage('user', data.user)
          writeStorage('accessToken', data.accessToken)
        }
      }
      options.headers['authorization'] = `Bearer ${accessToken}`
      return options
    },
  },
}
