import React from 'react'
import { Link } from 'gatsby'
import { StyledNavbar } from '../../../styles/navbarStyles'
import FullNav from '../../Globals/FullNavigation'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Navbar = () => {
  const matches = useMediaQuery('(max-width:1024px)')
  return (
    <StyledNavbar>
      <div className="navbar">
        <div className="left-links">
          <Link to="/">VoideyBarbier2021</Link>
        </div>
        {matches ? (
          <FullNav />
        ) : (
          <div className="right-links">
            <Link to="/equipe-de-campagne" activeClassName="active">
              Qui sommes-nous ?
            </Link>
            <Link to="/bilan" activeClassName="active">
              Bilan 2015/2021
            </Link>
            <Link to="/notre-projet" activeClassName="active">
              Notre projet
            </Link>
            <Link to="/galerie-photos" activeClassName="active">
              Galerie photos
            </Link>
            <Link to="/nous-contacter" activeClassName="active">
              Nous contacter
            </Link>
          </div>
        )}
      </div>
    </StyledNavbar>
  )
}

export default Navbar
