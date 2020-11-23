import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from '@reach/router'

import {
	LoginSignupContainer,
	LoginSignupFormContainer,
	FormGroupContainer,
	FormGroupLink,
} from '../LoginSignup.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'
import Input from '../../UI/Input/Input.component'
import { useAuthContext, UserLoginInputs } from '../../../hooks/useAuthHook'

interface LoginProps {
	setShowLogin: (showLogin: boolean) => void
	setShowSignup: (showSignup: boolean) => void
}

const Login: FC<LoginProps> = (props) => {
	const { setShowLogin, setShowSignup } = props

	const [ loading, setLoading ] = useState(false)
	const { register, handleSubmit, errors } = useForm<UserLoginInputs>()

	const { pathname } = useLocation()
	const { login } = useAuthContext()

	const onSubmit = async (userLoginInputs: UserLoginInputs) => {
		setLoading(true)
		await login(userLoginInputs)
		setLoading(false)
	}

	return (
		<LoginSignupContainer>
			<div onClick={() => setShowLogin(false)} />
			<LoginSignupFormContainer>
				<Heading type='Secondary'>Log into your account</Heading>

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
								},
							})}
						/>
					</FormGroupContainer>

					<FormGroupContainer>
						<Button>{!loading ? 'Log in' : 'Loading...'}</Button>
					</FormGroupContainer>

					<FormGroupLink>
						<Button
							type='linkText'
							to={pathname}
							onClick={() => {
								setShowSignup(true)
								setShowLogin(false)
							}}
						>
							I do not have an account
						</Button>
					</FormGroupLink>
				</form>
			</LoginSignupFormContainer>
		</LoginSignupContainer>
	)
}

export default Login
