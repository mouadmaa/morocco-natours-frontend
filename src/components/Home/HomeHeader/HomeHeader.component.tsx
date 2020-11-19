import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { HeaderContainer, HeaderTextContainer } from './HomeHeader.styles'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'

const HomeHeader: FC = () => {
	const data = useStaticQuery(query)
	const headerRef = useRef<HTMLHeadElement>(null)
	const [ elementTop, setElementTop ] = useState(0)

	const { scrollY, scrollYProgress } = useViewportScroll()
	const scale = useTransform(scrollYProgress, [ 0, 1 ], [ 1, -3 ])
	const y = useTransform(scrollY, [ elementTop, elementTop - 6 ], [ 1, -1 ], { clamp: false })

	useLayoutEffect(
		() => {
			if (headerRef.current) setElementTop(headerRef.current.offsetTop)
		},
		[ headerRef ],
	)

	const images = [
		{ numberTop: 18, fluid: data.person.childImageSharp.fluid, alt: 'person' },
		{ numberTop: 20, fluid: data.mountain1.childImageSharp.fluid, alt: 'mountain 1' },
		{ numberTop: -5, fluid: data.mountain2.childImageSharp.fluid, alt: 'mountain 2' },
		{ numberTop: -6, fluid: data.mountain3.childImageSharp.fluid, alt: 'mountain 3' },
		{ numberTop: -4, fluid: data.sky.childImageSharp.fluid, alt: 'sky' },
	]

	return (
		<HeaderContainer ref={headerRef}>
			<HeaderTextContainer style={{ opacity: scale, y }}>
				<Heading>
					<div>Outdoors</div>
					<div>is where life happens</div>
				</Heading>

				<Button color='white' type='buttonLink' to='/overview'>
					Discover our tours
				</Button>
			</HeaderTextContainer>

			{images.map((image) => (
				<HomeHeaderImage
					key={image.alt}
					elementTop={elementTop}
					numberTop={image.numberTop}
					fluid={image.fluid}
					alt={image.alt}
				/>
			))}
		</HeaderContainer>
	)
}

export default HomeHeader

interface HomeHeaderImageProps {
	elementTop: number
	numberTop: number
	fluid: any
	alt: string
}

const HomeHeaderImage: FC<HomeHeaderImageProps> = (props) => {
	const { elementTop, numberTop, fluid, alt } = props

	const { scrollY } = useViewportScroll()
	const y = useTransform(scrollY, [ elementTop, elementTop + numberTop ], [ 1, -1 ], { clamp: false })

	return (
		<motion.div style={{ y }}>
			<Image fluid={fluid} alt={alt} />
		</motion.div>
	)
}

const query = graphql`
	{
		person: file(relativePath: { eq: "person-3.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		mountain1: file(relativePath: { eq: "mountain-1.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		mountain2: file(relativePath: { eq: "mountain-2.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		mountain3: file(relativePath: { eq: "mountain-3.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		sky: file(relativePath: { eq: "sky.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
