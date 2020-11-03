require('dotenv').config()
const path = require('path')
const axios = require(`axios`).default

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const { data } = await axios.get(
    `${process.env.BACKEND_API_URL}/tours/tours-with-reviews-guides`
  )

  data.map(tour => {
    createNode({
      ...tour,
      parent: null,
      children: [],
      internal: {
        type: `tours`,
        contentDigest: createContentDigest(tour.id),
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(toursQuery)

  result.data.allTours.nodes.forEach(tour => {
    createPage({
      path: `/tour/${tour.slug}`,
      component: path.resolve(`./src/templates/tour.tsx`),
      context: { tour },
    })
  })
}

const toursQuery = `
  query {
    allTours {
      nodes {
        id
        name
        price
        ratingsAverage
        ratingsQuantity
        slug
        startDates
        description
        difficulty
        duration
        durationWeeks
        guides {
          email
          id
          name
          photo
          role
        }
        imageCover
        images
        maxGroupSize
        summary
        reviews {
          id
          review
          rating
          tour
          createdAt
          user {
            id
            name
            photo
          }
        }
        locations {
          _id
          coordinates
          day
          description
          type
        }
        startLocation {
          address
          coordinates
          description
          type
        }
      }
    }
  }
`
