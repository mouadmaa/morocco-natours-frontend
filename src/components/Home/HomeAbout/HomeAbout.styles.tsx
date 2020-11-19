import styled, { css } from 'styled-components'

export const AboutSectionContainer = styled.section`
	background-color: #151515;
	padding: 10rem 5vw;
	position: relative;
`

export const AboutShadow = styled.div`
	position: absolute;
	bottom: 100%;
	height: 300px;
	width: 100%;
	left: 0;
	z-index: 20;
	background-image: linear-gradient(to top, #151515, transparent);
`

export const AboutContainer = styled.div`
	margin: 0 auto;
	max-width: 120rem;
`

interface AboutContentContainerProps {
	reverse?: boolean
}

export const AboutContentContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	place-items: center;
	margin-bottom: 15rem;

	${({ reverse }: AboutContentContainerProps) => reverse && css`grid-template-columns: 1fr 2fr;`} div:nth-of-type(1) {
		position: relative;
		max-width: 60rem;
		color: ${(props) => props.theme.color.grayLight1};

		${({ reverse }: AboutContentContainerProps) =>
			reverse &&
			css`
				order: 1;
				margin-left: 10rem;
			`} > div {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;

			${({ reverse }: AboutContentContainerProps) =>
				reverse &&
				css`
					justify-content: flex-end;
					flex-direction: row-reverse;
					margin-left: 0;
				`} div {
				background-color: ${(props) => props.theme.color.primaryDark};
				height: 2px;
				width: 6rem;
				letter-spacing: 0.1rem;
				margin-right: 1.5rem;
			}

			p {
				color: ${(props) => props.theme.color.primaryDark};
				font-size: 1.2rem;
				font-weight: 600;
				letter-spacing: 0.1rem;
				text-transform: uppercase;
				margin: 0;
			}
		}

		h2 {
			font-size: 6rem;
			font-weight: 600;
			line-height: 1.2;
			margin: 1rem 0 2rem;

			@media only screen and (max-width: 37.5em) {
				font-size: 4rem;
			}
		}

		> span {
			position: absolute;
			left: -15%;
			bottom: 0%;
			font-weight: 600;
			font-size: 24rem;
			opacity: 0.1;
		}

		p {
			font-size: 1.4rem;
			font-weight: 400;
			opacity: 0.9;
			margin-bottom: 1rem;
		}

		a {
			color: ${(props) => props.theme.color.primaryDark};
			font-size: 1.2rem;
			font-weight: 600;
			letter-spacing: 0.1rem;
			text-transform: lowercase;
			display: inline-block;
			text-decoration: none;
		}

		@media only screen and (max-width: 56.25em) {
			order: 0;
			margin-left: 0;
		}
	}

	div:nth-of-type(2) {
		width: 100%;
		max-width: 60rem;
	}

	@media only screen and (max-width: 56.25em) {
		grid-template-columns: 1fr;
		gap: 5rem;
		margin-top: 5rem;
	}
`
