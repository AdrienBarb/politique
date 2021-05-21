import React from 'react'
import { StyledModal } from '../../styles/modalStyles'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <StyledModal initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="close" onClick={() => setSelectedImg(null)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <Img fluid={selectedImg} />
    </StyledModal>
  )
}

export default Modal
