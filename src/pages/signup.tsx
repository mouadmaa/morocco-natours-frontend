import React, { FC, useState } from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  LoginSignupContainer, LoginSignupFormContainer, FormGroupContainer, FormGroupLink
} from '../components/LoginSignup/LoginSignup.styles'
import SEO from '../components/Gatsby/SEO'
import Button from '../components/UI/Button/Button.component'
import Heading from '../components/UI/Heading/Heading.component'
import Input from '../components/UI/Input/Input.component'
import { useAuthContext, UserSignupInputs } from '../hooks/useAuthHook'

const SignupSection: FC = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, errors, getValues } = useForm<UserSignupInputs>()

  const { user, signup } = useAuthContext()
  if (user) navigate('/')

  const onSubmit = async (userSignupInputs: UserSignupInputs) => {
    setLoading(true)
    await signup(userSignupInputs)
    setLoading(false)
  }

  return (
    <LoginSignupContainer>
      <SEO title='Signup' />
      <LoginSignupFormContainer>
        <Heading type='Secondary'>
          Sign into your account
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroupContainer>
            <Input
              name='name'
              label='Your Name'
              placeholder='your'
              error={errors.name}
              register={register({
                required: true,
                minLength: {
                  value: 3,
                  message: 'Please tell us your name. at least 8 characters.',
                },
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Input
              name='email'
              label='Email Address'
              placeholder='you@exemple.com'
              error={errors.email}
              register={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email.',
                },
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Input
              type='password'
              name='password'
              label='Your Password'
              placeholder='********'
              error={errors.password}
              register={register({
                required: true,
                minLength: {
                  value: 8,
                  message: 'Please enter a valid password, at least 8 characters.',
                }
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Input
              type='password'
              name='passwordConfirm'
              label='Confirm Your Password'
              placeholder='********'
              error={errors.passwordConfirm}
              register={register({
                required: true,
                minLength: {
                  value: 8,
                  message: 'Please confirm your password.',
                },
                validate: value => {
                  const isNotSame = value === getValues('password')
                  if (!isNotSame) toast.warning('Passwords are not the same!',
                    { hideProgressBar: true, toastId: 'signup-toast' },
                  )
                  return isNotSame
                }
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Button>
              {!loading ? 'Sign up' : 'Loading...'}
            </Button>
          </FormGroupContainer>

          <FormGroupLink>
            <Button
              type='linkText'
              to='/login'
            >
              I already have an account
          </Button>
          </FormGroupLink>
        </form>
      </LoginSignupFormContainer>
    </LoginSignupContainer>
  )
}

export default SignupSection
