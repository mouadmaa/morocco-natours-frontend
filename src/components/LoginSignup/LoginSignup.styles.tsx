import styled from 'styled-components'

export const LoginSignupContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	height: 100%;
	position: fixed;
	width: 100%;
	z-index: 2000;
	backdrop-filter: blur(0.2rem);
	display: flex;
	align-items: center;
	justify-content: center;

	> div :first-child {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: transparent;
		top: 0;
		left: 0;
	}
`

export const LoginSignupFormContainer = styled.div`
	z-index: 2001;
	margin: 0 auto;
	width: 55rem;
	min-width: 30rem;
	background-color: ${({ theme }) => theme.color.grayLight1};
	box-shadow: ${({ theme }) => theme.shadowDark};
	padding: 5rem 7rem;
	border-radius: 5px;

	> h2 {
		width: 100%;
		text-align: center;
		margin-bottom: 3.5rem;

		div {
			display: none;
		}
	}

	@media only screen and (max-width: 56.25em) {
		padding: 2rem;
	}
`

export const FormGroupContainer = styled.div`
	:not(:last-child) {
		margin-bottom: 2.5rem;
	}

	p {
		font-size: 1.4rem;
		padding: 0.5rem 1rem;
	}

	button {
		width: 100%;
	}
`

export const FormGroupLink = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 1rem;
	margin-top: 0.5rem;
`
