import React from 'react'
import { StyledDocumentation } from '../../../styles/documentationStyles'
// @ts-ignore
import circulaire from '../../../images/affiche.jpeg'
// @ts-ignore
import lettre from '../../../images/lettre.pdf'
// @ts-ignore
import ensemble from '../../../images/ensemble.pdf'
import DocumentCard from './DocumentCard'

const Documentation = () => {
  return (
    <StyledDocumentation>
      <h1>Documentation</h1>
      <div className="documents-wrapper">
        <a href={circulaire} download>
          <DocumentCard title="Affiche" date="14/05/2021" />
        </a>
        <a href={lettre} download>
          <DocumentCard title="Lettre de candidature" date="14/05/2021" />
        </a>
        <a href={ensemble} download>
          <DocumentCard title="Ensemble continuons" date="10/06/2021" />
        </a>
      </div>
    </StyledDocumentation>
  )
}

export default Documentation
