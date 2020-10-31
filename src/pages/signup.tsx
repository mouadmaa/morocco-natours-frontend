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
// import { useAuthContext } from '../contexts/authContext'

interface SignupInputs {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const Signup: FC = () => {
  const { register, handleSubmit, errors, getValues, setError } = useForm<SignupInputs>()
  const { post, loading } = useFetch(process.env.GATSBY_BACKEND_API_URL)

  // const { login } = useAuthContext()

  const onSubmit = async (inputs: SignupInputs) => {
    const data = await post('/users/signup', inputs)
    if (data.user && data.accessToken) {
      // login(data.user, data.accessToken)
    } else {
      console.log(data.message)
    }
  }

  return (
    <Layout>
      <LoginSignupContainer>
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
                    setError('passwordConfirm', {
                      message: 'Passwords are not the same!',
                    })
                    return value === getValues('password')
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
    </Layout>
  )
}

export default Signup
