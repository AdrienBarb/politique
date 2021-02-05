const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
        query {
            allContentfulArticles {
                edges {
                    node {
                        titre
                        contentful_id
                    }
                }
            }
        }
  `);

  console.log(queryResults.data.allContentfulArticles.edges[0].node.contentful_id)

  queryResults.data.allContentfulArticles.edges.forEach(({ node }) => {
    createPage({
      path: node.contentful_id,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        id: node.contentful_id,
      },
    })
  })

};