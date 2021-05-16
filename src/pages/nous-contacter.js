import React, { useState } from 'react'
import ContactForm from '../components/Globals/ContactForm'
import SucessAlert from '../components/Globals/SucessAlert'
import { StyledContact } from '../styles/contactStyles'

const Contact = () => {
  const [formSubmission, setFormSubmission] = useState(false)
  return (
    <StyledContact>
      <h1>Une question ? Contactez nous !</h1>
      <div className="contact-wrapper">
        <div className="left-side">
          <div className="section">
            <h2>Par e-mail :</h2>
            <a
              href="mailto:voideybarbier2021@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              voideybarbier2021@gmail.com
            </a>
          </div>
          <div className="section">
            <h2>Par téléphone :</h2>
            <a href="tel:+33666845023" target="_blank" rel="noreferrer">
              +33 (0)6 66 84 50 23
            </a>
          </div>
        </div>
        <div className="right-side">
          <h2>Par message :</h2>
          {formSubmission ? (
            <SucessAlert />
          ) : (
            <ContactForm setFormSubmission={setFormSubmission} />
          )}
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact
