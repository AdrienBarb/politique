import React from 'react'
import { StyledModal } from '../../styles/modalStyles'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <StyledModal>
      <div className="close" onClick={() => setSelectedImg(null)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <Img fluid={selectedImg} />
    </StyledModal>
  )
}

export default Modal
