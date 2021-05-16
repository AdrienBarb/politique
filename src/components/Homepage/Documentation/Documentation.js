import React from 'react'
import { StyledDocumentation } from '../../../styles/documentationStyles'
import circulaire from '../../../images/circulaire.pdf'
import lettre from '../../../images/lettre.pdf'
import DocumentCard from './DocumentCard'

const Documentation = () => {
  return (
    <StyledDocumentation>
      <h1>Documentation</h1>
      <h2>Téléchargez les documents de la campagne :</h2>
      <div className="documents-wrapper">
        <a href={circulaire} download>
          <DocumentCard title="Circulaire" date="14/05/2021" />
        </a>
        <a href={lettre} download>
          <DocumentCard title="Lettre de candidature" date="14/05/2021" />
        </a>
      </div>
    </StyledDocumentation>
  )
}

export default Documentation
