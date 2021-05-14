import React from 'react'
import { StyledDocumentCard } from '../../../styles/documentCardStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const DocumentCard = ({ title, date }) => {
  return (
    <StyledDocumentCard>
      <FontAwesomeIcon icon={faFilePdf} />
      <div className="document-info">
        <h1>{title}</h1>
        <h2>{date}</h2>
      </div>
    </StyledDocumentCard>
  )
}

export default DocumentCard
