import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { StyledImageGallery } from '../styles/imageGalleryStyles'
import Modal from '../components/Globals/Modal'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

const ImageGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
        sort: {order: DESC, fields: birthtime}
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledImageGallery>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VoideyBarbier | Photos</title>
      </Helmet>
      <h1>En campagne sur le terrain !</h1>
      <div className="grid">
        {data.allFile.nodes.map((el) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            key={el.id}
            className="image-wrapper"
            onClick={() => setSelectedImg(el.childImageSharp.fluid)}
          >
            <Img fluid={el.childImageSharp.fluid} />
          </motion.div>
        ))}
      </div>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </StyledImageGallery>
  )
}

export default ImageGallery
