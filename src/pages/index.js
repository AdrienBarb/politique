import * as React from 'react'
// @ts-ignore
import landingpage from '../images/landingpage.png'
import { StyledHomepage } from '../styles/homepageStyles'
import MeetUs from '../components/Homepage/MeetUs/MeetUs'
import District from '../components/Homepage/District/District'
import Documentation from '../components/Homepage/Documentation/Documentation';


const IndexPage = () => {
  return (
    <StyledHomepage>
      <img src={landingpage} alt="candidats"/>
      <MeetUs />
      <District />
      <Documentation />
    </StyledHomepage>
  )
}

export default IndexPage
