import React from 'react'
import { StyledSuccessAlert } from '../../styles/sucessAlertStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const SucessAlert = () => {
  return (
    <StyledSuccessAlert>
      Votre message a bien été envoyé !
      <span className="wrapper">
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
    </StyledSuccessAlert>
  )
}

export default SucessAlert
