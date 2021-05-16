import * as React from 'react'
import { StyledHomepage } from '../styles/homepageStyles'
import MeetUs from '../components/Homepage/MeetUs/MeetUs'
import District from '../components/Homepage/District/District'
import Documentation from '../components/Homepage/Documentation/Documentation';
import { StaticImage } from "gatsby-plugin-image"
import Landing from '../components/Homepage/Landing/Landing';


const IndexPage = () => {
  return (
    <StyledHomepage>
      <Landing />
      {/* <MeetUs /> */}
      <District />
      <Documentation />
    </StyledHomepage>
  )
}

export default IndexPage
