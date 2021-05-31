import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledLanding } from '../../../styles/landingStyles'

const Landing = () => {
  return (
    <StyledLanding>
      <StaticImage
        src="../../../images/bamdeau.jpg"
        alt="Candidats"
        className="image"
      />
      <div className="introduction">
        <h1>ENSEMBLE CONTINUONS</h1>
        <p>
          Les 20 et 27 juin, nous voterons pour désigner les femmes et les
          hommes qui conduiront notre département. Votre vote est important, car
          vos élus départementaux agissent sur quantité de domaines de votre vie
          quotidienne.
        </p>
        <span className="divider"></span>
      </div>
      <div className="second-intro">
        <h2> NOTRE FORCE : LE TRAVAIL ACCOMPLI ET LA MAÎTRISE DES DOSSIERS</h2>
        <p>
          <span className="quote">"</span> Nous sommes vos conseillers
          départementaux, nous avons œuvré à construire un Département
          attractif, dynamique, solidaire, en respectant nos engagements et sans
          augmenter la fiscalité. Vous nous connaissez bien, nous sommes
          d’esprit ouvert et à l’écoute de tous, rassembleurs, nous rejetons les
          postures politiciennes et le sectarisme, au profit de l’intérêt
          général, de votre intérêt. <span className="quote">"</span>
        </p>
      </div>
    </StyledLanding>
  )
}

export default Landing
