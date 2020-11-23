import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { AboutSectionContainer, AboutContentContainer, AboutContainer, AboutShadow } from './HomeAbout.styles'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

const HomeAbout: FC = () => {
	const data = useStaticQuery(query)

	const contents = [
		{
			id: '01',
			image: data.nature1.childImageSharp.fluid,
			text: 'Get Started',
			title: 'What level of hiker are you?',
			description:
				'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?',
		},
		{
			id: '02',
			image: data.nature2.childImageSharp.fluid,
			text: 'Hiking Essentials',
			title: 'Picking the right Hiking Gear!',
			description:
				'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing.A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
		},
		{
			id: '03',
			image: data.nature3.childImageSharp.fluid,
			text: 'Where you go is the key',
			title: 'Understand Your Map & Timing',
			description:
				'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
		},
	]

	return (
		<AboutSectionContainer>
			<AboutShadow />
			<AboutContainer>
				{contents.map((content, index) => (
					<AboutContent
						key={content.id}
						id={content.id}
						reverse={index % 2 !== 0}
						text={content.text}
						title={content.title}
						image={content.image}
						description={content.description}
					/>
				))}
			</AboutContainer>
		</AboutSectionContainer>
	)
}

export default HomeAbout

interface AboutContentProps {
	reverse: boolean
	id: string
	text: string
	title: string
	description: string
	image: any
}

const AboutContent: FC<AboutContentProps> = (props) => {
	const { reverse, id, text, title, description, image } = props

	const contentRef = useRef<HTMLDivElement>(null)
	const [ elementTop, setElementTop ] = useState(0)

	const { scrollY, scrollYProgress } = useViewportScroll()
	const opacity = useTransform(scrollYProgress, [ 0, 1 ], [ 0, 5 ])
	const y = useTransform(scrollY, [ elementTop, elementTop + 12 ], [ 1, -1 ], { clamp: false })

	useLayoutEffect(
		() => {
			if (contentRef.current) setElementTop(contentRef.current.offsetTop)
		},
		[ contentRef ],
	)

	return (
		<AboutContentContainer ref={contentRef} reverse={reverse}>
			<motion.div style={{ opacity }}>
				<div>
					<div />
					<p>{text}</p>
				</div>
				<h2>{title}</h2>
				<p>{description}</p>
				<motion.span style={{ y }}>{id}</motion.span>
				<Link to='/overview'>read more &rarr;</Link>
			</motion.div>
			<motion.div style={{ opacity }}>
				<Image fluid={image} alt={`nature ${id}`} />
			</motion.div>
		</AboutContentContainer>
	)
}

const query = graphql`
	{
		nature1: file(relativePath: { eq: "nature-1.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		nature2: file(relativePath: { eq: "nature-2.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		nature3: file(relativePath: { eq: "nature-3.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
