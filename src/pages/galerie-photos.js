import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { StyledImageGallery } from '../styles/imageGalleryStyles'
import Modal from '../components/Globals/Modal'

const ImageGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
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
      <h1>En campagne sur le terrain !</h1>
      <div className="grid">
        {data.allFile.nodes.map((el) => (
          <div
            key={el.id}
            onClick={() => setSelectedImg(el.childImageSharp.fluid)}
          >
            <Img fluid={el.childImageSharp.fluid} />
          </div>
        ))}
      </div>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </StyledImageGallery>
  )
}

export default ImageGallery
