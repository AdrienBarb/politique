import React from 'react'
import { StyledFooter } from '../../../styles/footerStyles'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Plan du site</h3>
          <ul>
            <li>
              <Link to="/">Page d'accueil</Link>
            </li>
            <li>
              <Link to="/equipe-de-campagne">Qui sommes-nous ?</Link>
            </li>
            <li>
              <Link to="/bilan">Bilan 2015/2021</Link>
            </li>
            <li>
              <Link to="/notre-projet">Notre projet</Link>
            </li>
            <li>
              <Link to="/galerie-photos">Galerie photos</Link>
            </li>
            <li>
              <Link to="/nous-contacter">Nous contacter</Link>
            </li>
          </ul>
        </div>
        <span className="divider"></span>
        <div className="footer-section">
          <h3>Nous contacter</h3>
          <ul>
            <li>
              <a
                href="mailto:voideybarbier2021@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                voideybarbier2021@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+33666845023" target="_blank" rel="noreferrer">
                +33 (0)6 66 84 50 23
              </a>
            </li>
          </ul>
        </div>
        <span className="divider"></span>
        <div className="footer-section">
          <h3>Facebook</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Voidey-Barbier-D%C3%A9partementales-2021-108658781381167"
                target="_blank"
                rel="noreferrer"
              >
                Voidey-Barbier Départementales 2021
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
