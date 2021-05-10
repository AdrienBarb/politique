import React from 'react'
import { graphql } from "gatsby"

const article = ({ data }) => {
    return (
       
            <div>
                {data.allContentfulArticles.edges[0].node.titre}
            </div>
     
    )
}

export default article


export const query = graphql`
  query ($id: String!) {
    allContentfulArticles(filter: { contentful_id: { eq: $id } }) {
        edges {
            node {
            titre
            createdAt(formatString: "DD/MM/YYYY")
            description
            {
                description
            }
            image {
                fluid(maxWidth: 980) {
                    ...GatsbyContentfulFluid
                }
            }
            }
        }
    }
  }
`