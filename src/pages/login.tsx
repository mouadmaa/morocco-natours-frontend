import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useFetch } from 'use-http'

import {
  LoginSignupContainer, LoginSignupFormContainer, FormGroupContainer, FormGroupLink
} from '../components/LoginSignup/LoginSignup.styles'
import Layout from '../Layout'
import Button from '../components/UI/Button/Button.component'
import Heading from '../components/UI/Heading/Heading.component'
import Input from '../components/UI/Input/Input.component'
import { useAuthContext } from '../hooks/useAuthHook'

interface LoginInputs {
  email: string
  password: string
}

const Login: FC = () => {
  const { register, handleSubmit, errors } = useForm<LoginInputs>()
  const { post, loading } = useFetch(process.env.GATSBY_BACKEND_API_URL)

  const { user, login } = useAuthContext()
  console.log(user)

  const onSubmit = async (inputs: LoginInputs) => {
    const data = await post('/users/login', inputs)
    if (data.user && data.accessToken) {
      login(data.user, data.accessToken)
    } else {
      console.log(data.message)
    }
  }

  return (
    <Layout>
      <LoginSignupContainer>
        <LoginSignupFormContainer>
        <Heading type='Secondary'>
          Log into your account
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroupContainer>
            <Input
              name='email'
              label='Email'
              placeholder='you@exemple.com'
              error={errors.email}
              register={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Input
              type='password'
              name='password'
              label='Password'
              placeholder='********'
              error={errors.password}
              register={register({
                required: true,
                minLength: {
                  value: 8,
                  message: 'Please enter a valid password',
                }
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Button>
              {!loading ? 'Log in' : 'Loading...'}
            </Button>
          </FormGroupContainer>

          <FormGroupLink>
            <Button
              type='linkText'
              to='/signup'
            >
              I do not have an account
            </Button>
          </FormGroupLink>
        </form>
        </LoginSignupFormContainer>
      </LoginSignupContainer>
    </Layout>
  )
}

export default Login
