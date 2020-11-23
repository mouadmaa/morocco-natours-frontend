import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useLocation } from '@reach/router'

import {
	LoginSignupContainer,
	LoginSignupFormContainer,
	FormGroupContainer,
	FormGroupLink,
} from '../LoginSignup.styles'
import Button from '../../UI/Button/Button.component'
import Heading from '../../UI/Heading/Heading.component'
import Input from '../../UI/Input/Input.component'
import { useAuthContext, UserSignupInputs } from '../../../hooks/useAuthHook'

interface SignupProps {
	setShowLogin: (showLogin: boolean) => void
	setShowSignup: (showSignup: boolean) => void
}

const Signup: FC<SignupProps> = (props) => {
	const { setShowLogin, setShowSignup } = props

	const [ loading, setLoading ] = useState(false)
	const { register, handleSubmit, errors, getValues } = useForm<UserSignupInputs>()

	const { pathname } = useLocation()
	const { signup } = useAuthContext()

	const onSubmit = async (userSignupInputs: UserSignupInputs) => {
		setLoading(true)
		await signup(userSignupInputs)
		setLoading(false)
	}

	return (
		<LoginSignupContainer>
			<div onClick={() => setShowSignup(false)} />
			<LoginSignupFormContainer>
				<Heading type='Secondary'>Sign into your account</Heading>

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
								},
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
								validate: (value) => {
									const isNotSame = value === getValues('password')
									if (!isNotSame)
										toast.warning('Passwords are not the same!', { hideProgressBar: true, toastId: 'signup-toast' })
									return isNotSame
								},
							})}
						/>
					</FormGroupContainer>

					<FormGroupContainer>
						<Button>{!loading ? 'Sign up' : 'Loading...'}</Button>
					</FormGroupContainer>

					<FormGroupLink>
						<Button
							type='linkText'
							to={pathname}
							onClick={() => {
								setShowLogin(true)
								setShowSignup(false)
							}}
						>
							I already have an account
						</Button>
					</FormGroupLink>
				</form>
			</LoginSignupFormContainer>
		</LoginSignupContainer>
	)
}

export default Signup
