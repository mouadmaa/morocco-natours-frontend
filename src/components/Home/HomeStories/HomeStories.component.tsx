import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
	StoriesContainer,
	StoriesBGImageContainer,
	StoriesButtonContainer,
	StoriesTitleContainer,
	StoryContentContainer,
	StoryShapeContainer,
	StoryTextContainer,
	StoryContainer,
} from './HomeStories.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'

const HomeStories = () => {
	const data = useStaticQuery(query)

	return (
		<StoriesContainer>
			<StoriesBGImageContainer>
				<img src={data.nature4.publicURL} alt='nature 5' />
			</StoriesBGImageContainer>

			<StoriesTitleContainer>
				<Heading type='Secondary'>We make people genuinely happy</Heading>
			</StoriesTitleContainer>

			<StoryContentContainer>
				<StoryContainer>
					<StoryShapeContainer>
						<img src={data.person1.publicURL} alt='Person on a tour' />
						<figcaption>Mary Smith</figcaption>
					</StoryShapeContainer>

					<StoryTextContainer>
						<h3>I had the best week ever with my family</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero
							repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
							aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
						</p>
					</StoryTextContainer>
				</StoryContainer>
			</StoryContentContainer>

			<StoryContentContainer>
				<StoryContainer>
					<StoryShapeContainer>
						<img src={data.person2.publicURL} alt='Person on a tour' />
						<figcaption>Jack Wilson</figcaption>
					</StoryShapeContainer>

					<StoryTextContainer>
						<h3>WOW! My life is completely different now</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero
							repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
							aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
						</p>
					</StoryTextContainer>
				</StoryContainer>
			</StoryContentContainer>

			<StoriesButtonContainer>
				<Button type='buttonLink' to='/overview'>
					Read all stories
				</Button>
			</StoriesButtonContainer>
		</StoriesContainer>
	)
}

export default HomeStories

const query = graphql`
	{
		nature4: file(relativePath: { eq: "nature-4.jpg" }) {
			publicURL
		}
		person1: file(relativePath: { eq: "person-1.jpg" }) {
			publicURL
		}
		person2: file(relativePath: { eq: "person-2.jpg" }) {
			publicURL
		}
	}
`
