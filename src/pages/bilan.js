import React from 'react'
import { Helmet } from 'react-helmet'
import { StyledBilan } from '../styles/bilanStyles'

const Bilan = () => {
  return (
    <StyledBilan>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VoideyBarbier | Bilan</title>
      </Helmet>
      <h1>Le bilan de nos actions</h1>
      <div className="section">
        <h2>Pour nos concitoyens</h2>
        <p>
          Amélioration des conditions de vie et accompagnement des plus
          fragiles, des personnes âgées, reconnaissance des aides à domicile...
        </p>
      </div>
      <div className="section">
        <h2>Pour la sécurité</h2>
        <p>
          Renouvellement et modernisation des véhicules de secours et matériels
          des casernes de sa- peurs-pompiers, soutien à leurs personnels...
        </p>
      </div>
      <div className="section">
        <h2>Pour nos collégiens</h2>
        <p>
          Amélioration de la qualité des repas dans nos cantines, modernisation
          des collèges, ta- blettes numériques, imprimantes 3D, remise des
          diction- naires...
        </p>
      </div>
      <div className="section">
        <h2>Pour le sport et la culture</h2>
        <p>
          Soutien aux clubs, évène- ments, harmonies municipales,
          bibliothèques...
        </p>
      </div>
      <div className="section">
        <h2>Pour préserver l'environnement</h2>
        <p>
          Position ferme pour la sauvegarde de nos rivières, gestion des espaces
          naturels sensibles du canton...
        </p>
      </div>
      <div className="section">
        <h2>Pour les projets de nos communes</h2>
        <p>
          Défense des dossiers d’entretien du patrimoine, d’aménagement du
          territoire, de création de services, de rénovation énergétique, de
          réfection de voirie, d’aires de jeu...
        </p>
      </div>
      <div className="section">
        <h2>Pour le soutien à nos entreprise, nos artisans et nos commerces</h2>
        <p>
          Peugeot Japy, Peugeot Motocycles, Plastivaloire, Aperam,
          Zurflüh-Feller...
        </p>
      </div>
      <div className="section">
        <h2>Pour la vaccination</h2>
        <p>Avec deux centres sur notre canton.</p>
      </div>
    </StyledBilan>
  )
}

export default Bilan
