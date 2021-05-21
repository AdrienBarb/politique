import React from 'react'
import { Helmet } from 'react-helmet'
import { StyledOurProject } from '../styles/ourProjectStyles'

const OurProject = () => {
  return (
    <StyledOurProject>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VoideyBarbier | Notre projet</title>
      </Helmet>
      <h1>Notre projet</h1>
      <div className="section">
        <h2>
          Pour favoriser l’épanouissement de chacun, à chaque étape de sa vie
        </h2>
        <ul>
          <li>
            Soutenir les familles et apporter des réponses concrètes à leurs
            besoins
          </li>
          <li>Améliorer la prise en charge du handicap et du vieillissement</li>
          <li>
            Favoriser le maintien à domicile, diversifier les solutions
            d’hébergement avec des tarifs accessibles à tous
          </li>
          <li>Développer une offre de santé performante et de proximité</li>
          <li>
            Protéger les collégiens et assurer leur qualité de vie dans les
            établissements
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Pour soutenir nos emplois</h2>
        <ul>
          <li>
            Répondre présent aux côtés des salariés chaque fois que c’est
            nécessaire
          </li>
          <li>
            Dynamiser l’effet du plan de relance sur l’ensemble du tissu
            économique, des commerces et métiers de bouche
          </li>
          <li>
            Renforcer les accompagnements individualisés pour l’insertion
            professionnelle des jeunes et des allocataires RSA{' '}
          </li>
          <li>
            Augmenter les salaires des aides à domicile et leur proposer une
            vraie reconnaissance par un plan de carrière et des formations
            qualifiantes
          </li>
          <li>
            Soutenir les agriculteurs pour la modernisation de leurs
            installations
          </li>
          <li>
            Appuyer les projets des entrepreneurs et aider à la recherche de
            solutions en cas de difficultés
          </li>
        </ul>
      </div>
      <div className="section">
        <h2>Pour l’environnement et la biodiversité</h2>
        <ul>
          <li>
            Améliorer la qualité de l’eau de nos rivières, tolérance zéro en cas
            de pollution
          </li>
          <li>
            Gérer la forêt en prenant en compte l’adaptation au réchauffement
            climatique
          </li>
          <li>
            Prendre des mesures de protection de la petite faune sauvage
            (oiseaux, hérissons...){' '}
          </li>
          <li>Devenir un Département éco-exemplaire</li>
        </ul>
      </div>
      <div className="section">
        <h2>Pour se déplacer en sécurité</h2>
        <ul>
          <li>
            Résorber les zones accidentogènes du réseau routier départemental
          </li>
          <li>
            Développer des pistes cyclables et prendre en compte l’usage du vélo
            lors des aménagements routiers{' '}
          </li>
          <li>
            Créer des aires de co-voiturage et soutenir l’achat de véhicules
            vertueux
          </li>
          <li>
            Réaliser les travaux nécessaires à la prévention des mouvements de
            terrain
          </li>
        </ul>
      </div>
      <div className="section">
        <h2>Pour renforcer l’attractivité du territoire</h2>
        <ul>
          <li>
            Valoriser les sites touristiques et les circuits thématiques,
            aménager des sites pour le loisir de plein air et la baignade
          </li>
          <li>
            Répartir équitablement l’offre culturelle, afin de la rendre
            accessible à tous
          </li>
          <li>
            Soutenir la pratique sportive amateur comme celle des clubs de haut
            niveau
          </li>
          <li>
            Soutenir l’enseignement de la musique, les harmonies et batteries
            fanfares municipales
          </li>
          <li>Soutenir les manifestations associatives et communales</li>
        </ul>
      </div>
    </StyledOurProject>
  )
}

export default OurProject
