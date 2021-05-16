import React from 'react'
import { StyledDistrict } from '../../../styles/districtStyles'
import { StaticImage } from 'gatsby-plugin-image'

const District = () => {
  return (
    <StyledDistrict>
      <div className="district-details">
        <h1>Le canton de Valentigney</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="image-wrapper">
        <StaticImage
          src="../../../images/canton-valentigney.png"
          alt="Canton de Valentigney"
          className="image"
        />
      </div>
    </StyledDistrict>
  )
}

export default District
