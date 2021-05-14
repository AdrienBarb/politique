import React from 'react'
import { StyledDocumentation } from '../../../styles/documentationStyles'
import DocumentCard from './DocumentCard'

const Documentation = () => {
  return (
    <StyledDocumentation>
      <h1>Documentation</h1>
      <h2>Téléchargez les documents de la campagne :</h2>
      <div className="documents-wrapper">
        <a href="../../../images/circulaire.pdf" download>
          <DocumentCard title="Circulaire" date="14/05/2021" />
        </a>
        <a href="'../../../images/lettre.pdf'" download>
          <DocumentCard title="Lettre" date="14/05/2021" />
        </a>
      </div>
    </StyledDocumentation>
  )
}

export default Documentation
