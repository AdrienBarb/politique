import React from 'react'
import { Link } from 'gatsby'
import { StyledNavbar } from '../../../styles/navbarStyles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="left-links">
        <Link to="/">VoideyBarbier2021</Link>
      </div>
      <div className="right-links">
        <Link to="equipe-de-campagne">Qui sommes nous ?</Link>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
