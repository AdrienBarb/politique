import * as React from 'react'
// @ts-ignore
import landingpage from '../images/landingpage.png'
import { StyledHomepage } from '../styles/homepageStyles'
import MeetUs from '../components/Homepage/MeetUs/MeetUs'
import District from '../components/Homepage/District/District'


const IndexPage = () => {
  return (
    <StyledHomepage>
      <img src={landingpage} alt="candidats"/>
      <MeetUs />
      <District />
    </StyledHomepage>
  )
}

export default IndexPage
