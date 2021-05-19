import React, { useRef, useEffect } from 'react'
import { StyledSuccessAlert } from '../../styles/sucessAlertStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap/all'

const SucessAlert = () => {
  let component = useRef(null)
  const timeline = gsap.timeline()

  useEffect(() => {
    timeline.from(component.current, {
      duration: 0.4,
      opacity: 0,
      ease: 'power2.inOut',
    })

    console.log('je passe')
  }, [])

  return (
    <StyledSuccessAlert ref={component}>
      Votre message a bien été envoyé !
      <span className="wrapper">
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
    </StyledSuccessAlert>
  )
}

export default SucessAlert
