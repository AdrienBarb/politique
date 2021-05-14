import React, { useState, useRef } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import { gsap } from 'gsap/all'
import { StyledFullnav } from '../../styles/fullnavStyles'

const FullNav = () => {
  const [isOpen, setOpen] = useState(false)

  let fullNav = useRef(null)
  const timeline = gsap.timeline()

  const handleAnimation = () => {
    if (isOpen) {
      timeline.to(fullNav.current, {
        duration: 0.4,
        opacity: 0,
        ease: 'power2.inOut',
      })
      timeline.to(fullNav.current, {
        duration: 0,
        css: { visibility: 'hidden' },
      })
    } else {
      timeline.to(fullNav.current, {
        duration: 0,
        css: { visibility: 'visible' },
      })
      timeline.to(fullNav.current, {
        duration: 0.4,
        opacity: 1,
        ease: 'power2.inOut',
      })
    }
  }

  return (
    <StyledFullnav 
// @ts-ignore
    isOpen={isOpen}>
      <div
        className="humburger"
        
        onClick={() => handleAnimation()}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <div className="fullnav-wrapper" ref={fullNav}>
        <div className="fullnav">
          <Link to="/equipe-de-campagne">Qui sommes nous ?</Link>
        </div>
      </div>
    </StyledFullnav>
  )
}

export default FullNav
