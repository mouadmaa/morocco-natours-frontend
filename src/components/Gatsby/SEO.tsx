/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  meta?: any[]
  link?: {
    rel: string
    href: string
  }[]
}

const SEO: FC<SEOProps> = props => {
  const {
    title = '', description = '', lang = 'en', meta = [], link = []
  } = props

  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={link}
    />
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
