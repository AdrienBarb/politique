import React from 'react'
import { Link } from 'gatsby'
import { StyledNavbar } from '../../../styles/navbarStyles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="navbar">
        <div className="left-links">
          <Link to="/">VoideyBarbier2021</Link>
        </div>
        <div className="right-links">
          <Link to="/equipe-de-campagne" activeClassName="active">
            Qui sommes nous ?
          </Link>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
