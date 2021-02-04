import React, { useState, useEffect } from 'react'
import classes from './Information.module.scss'
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

const Information = () => {
  const [ data, setData ] = useState({
    'titre': null,
    'contenu': null,
    'imageDescription': null,
    'image': null
  })

    const query = useStaticQuery(graphql`
    query {
        allContentfulInformationPrincipale (
        limit: 1,
        sort: {
          fields: [createdAt]
          order: DESC
        }
      ) {
        edges {
          node {
            titre
            descriptionImage
            contenu
            {
              contenu
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

  useEffect(() => {
    setData({
      ...query,
      'title': query.allContentfulInformationPrincipale.edges[0].node.titre,
      'contenu': query.allContentfulInformationPrincipale.edges[0].node.contenu.contenu,
      'imageDescription': query.allContentfulInformationPrincipale.edges[0].node.descriptionImage,
      'image': query.allContentfulInformationPrincipale.edges[0].node.image,
    })
  }, [])

  console.log(data)

    return (
        <div className={classes.informationWrapper}>
          <div className={classes.informationcontainer}>
            <div className={classes.contentWrapper}>
                <div className={classes.title}>
                    {data.title}
                </div>
                <div className={classes.content}>
                 {data.contenu}
                </div>
            </div>
            <div className={classes.imageWrapper}>
                <Img 
                    className={classes.image}
                    fluid={data.image ? data.image.fluid : null} 
                    key={data.image ? data.image.fluid.src : null}
                    alt={data.image ? data.image.title : null}
                />
                <div className={classes.imageDescription}>
                  {data.imageDescription}
                </div>
            </div>
          </div>
        </div>
    )
}

export default Information
