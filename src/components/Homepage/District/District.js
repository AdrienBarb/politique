import React from 'react'
import { StyledDistrict } from '../../../styles/districtStyles'
// @ts-ignore
import valentigney from '../../../images/valentigney.jpeg'

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
        <img src={valentigney} alt="" />
      </div>
    </StyledDistrict>
  )
}

export default District
