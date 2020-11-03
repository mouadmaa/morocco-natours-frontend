import React, { FC, useState } from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'

import {
  LoginSignupContainer, LoginSignupFormContainer, FormGroupContainer, FormGroupLink
} from '../components/LoginSignup/LoginSignup.styles'
import SEO from '../components/Gatsby/SEO'
import Heading from '../components/UI/Heading/Heading.component'
import Button from '../components/UI/Button/Button.component'
import Input from '../components/UI/Input/Input.component'
import { useAuthContext, UserLoginInputs } from '../hooks/useAuthHook'

const LoginSection: FC = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, errors } = useForm<UserLoginInputs>()

  const { user, login } = useAuthContext()
  if (user) navigate('/')

  const onSubmit = async (userLoginInputs: UserLoginInputs) => {
    setLoading(true)
    await login(userLoginInputs)
    setLoading(false)
  }

  return (
    <LoginSignupContainer>
      <SEO title='Login' />
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
  )
}

export default LoginSection
