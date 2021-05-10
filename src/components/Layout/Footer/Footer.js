import React from 'react'
import { StyledFooter } from '../../../styles/footerStyles'
// @ts-ignore
import facebook from '../../../images/facebook.svg'
// @ts-ignore
import email from '../../../images/email.svg'
// @ts-ignore
import phone from '../../../images/phone.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        Nous contacter :
        <div className="iconWrapper">
          <a href="mailto:voideybarbier2021@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="email" />
          </a>
          <a href="tel:+33666845023" target="_blank" rel="noreferrer">
            <img src={phone} alt="phone" className="phoneIcon"/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="wrapper">
        Nous suivre sur les réseaux :
        <div className="iconWrapper">
          <a href="https://www.facebook.com/Voidey-Barbier-D%C3%A9partementales-2021-108658781381167" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
