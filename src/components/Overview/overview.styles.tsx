import styled from 'styled-components'

export const OverviewContent = styled.div`
	padding: 12rem 5vw 10rem;
	max-width: 150rem;
	min-height: 80vh;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	place-content: center;
	place-items: center;
	grid-gap: 10rem 4rem;

	@media only screen and (max-width: 75em) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 8rem;
	}

	@media only screen and (max-width: 56.25em) {
		grid-template-columns: 1fr;
	}
`
