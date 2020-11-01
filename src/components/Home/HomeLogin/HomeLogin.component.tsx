import React, { FC, useEffect } from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import { useFetch } from 'use-http'
import { useMedia } from 'use-media'

import {
  HomeBookingContainer, BookingContainer, BookingContentContainer,
  BookingFormContainer, BookingTitleContainer, FormGroupContainer
} from './HomeLogin.styles'
import Button from '../../UI/Button/Button.component'
import Heading from '../../UI/Heading/Heading.component'
import Input from '../../UI/Input/Input.component'
import { useAuthContext } from '../../../hooks/useAuthHook'

interface HomeLoginProps {
  setHideHomeLogin: (hide: boolean) => void
}

interface LoginInputs {
  email: string
  password: string
}

const HomeLogin: FC<HomeLoginProps> = props => {
  const { setHideHomeLogin } = props
  const data = useStaticQuery(query)

  const { register, handleSubmit, errors } = useForm<LoginInputs>()
  const { post, loading } = useFetch(process.env.GATSBY_BACKEND_API_URL)
  const bigTabletView = useMedia({ maxWidth: '75em' })
  const smallTabletView = useMedia({ maxWidth: '56.25em' })

  const { user, login } = useAuthContext()

  useEffect(() => {
    setHideHomeLogin(!!user)
  }, [user])

  const onSubmit = async (inputs: LoginInputs) => {
    const data = await post('/users/login', inputs)
    if (data.user && data.accessToken) {
      login(data.user, data.accessToken)
      navigate('/overview', { replace: true })
    } else {
      toast.error(data.message)
    }
  }

  const HeroImage = [
    bigTabletView && !smallTabletView ? `linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 65%, transparent 65%)`
      : smallTabletView ? `linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)`
        : `linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%)`,
    data.file.childImageSharp.fluid
  ]

  return (
    <HomeBookingContainer>
      <BookingContentContainer>
        <BookingContainer
          fluid={HeroImage}
        >
          <BookingFormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <BookingTitleContainer>
                <Heading type='Secondary'>
                  Start booking now
                </Heading>
              </BookingTitleContainer>

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

              <Button type='buttonSmall'>
                {!loading ? 'Log In' : 'Loading...'}
              </Button>
            </form>
          </BookingFormContainer>
        </BookingContainer>
      </BookingContentContainer>
    </HomeBookingContainer>
  )
}

export default HomeLogin

const query = graphql`
  {
    file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
