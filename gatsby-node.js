
const axios = require(`axios`).default

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  // fetch raw data from the tours api
  const res = await axios.get(`${'http://localhost:5000/api/v1'}/tours`)
  console.log('process.env.GATSBY_API_URL', process.env.GATSBY_API_URL)

  // map into these results and create nodes
  res.data.map(tour => {
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
