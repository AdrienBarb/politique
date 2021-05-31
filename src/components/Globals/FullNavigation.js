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
      setOpen(!isOpen)
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
      setOpen(!isOpen)
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
      isOpen={isOpen}
    >
      <div className="humburger" onClick={() => handleAnimation()}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <div className="fullnav-wrapper" ref={fullNav}>
        <div className="fullnav">
          <Link to="/equipe-de-campagne" onClick={() => handleAnimation()}>
            Qui sommes-nous ?
          </Link>
          <Link to="/bilan" onClick={() => handleAnimation()}>
            Bilan 2015/2021
          </Link>
          <Link to="/notre-projet" onClick={() => handleAnimation()}>
            Notre projet
          </Link>
          <Link to="/actualite" onClick={() => handleAnimation()}>
            L' actualité
          </Link>
          <Link to="/galerie-photos" onClick={() => handleAnimation()}>
            Galerie photos
          </Link>
          <Link to="/nous-contacter" onClick={() => handleAnimation()}>
            Nous contacter
          </Link>
        </div>
      </div>
    </StyledFullnav>
  )
}

export default FullNav
