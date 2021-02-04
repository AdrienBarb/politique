import React, { useState, useEffect } from 'react'
import classes from './LastArticles.module.scss'
import { graphql, useStaticQuery } from 'gatsby';
import Article from '../Article/Article'

const LastArticles = () => {
    
    const query = useStaticQuery(graphql`
        query {
            allContentfulArticles (
            limit: 3,
            sort: {
                fields: [createdAt]
                order: DESC
            }
            ) {
            edges {
                node {
                titre
                createdAt
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
    `)

    // console.log(query.allContentfulArticles.edges)

    let render = null
    if(query.allContentfulArticles.edges) {
        render = (
            <div className={classes.articlesWrapper}>
                {query.allContentfulArticles.edges.map((edge) => {
                    return (
                        <div className={classes.articleWrapper}>
                            <Article data={edge.node}/>
                        </div>
                    )
                })}
            </div>
        )

    }
    

    return (
        <div className={classes.articlesSection}>
            {render}
        </div>
    )
}

export default LastArticles
