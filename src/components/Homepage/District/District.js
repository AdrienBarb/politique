import React from 'react'
import { StyledDistrict } from '../../../styles/districtStyles'
import { StaticImage } from 'gatsby-plugin-image'

const District = () => {
  return (
    <StyledDistrict>
      <h1>Le canton de Valentigney</h1>
      <h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h2>
      <div className="image-wrapper">
        <StaticImage
          src="../../../images/valentigney.jpeg"
          alt="Canton de Valentigney"
          className="image"
        />
      </div>
    </StyledDistrict>
  )
}

export default District
