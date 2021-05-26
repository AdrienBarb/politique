import * as React from 'react'
import { StyledHomepage } from '../styles/homepageStyles'
import MeetUs from '../components/Homepage/MeetUs/MeetUs'
import District from '../components/Homepage/District/District'
import Documentation from '../components/Homepage/Documentation/Documentation'
import Landing from '../components/Homepage/Landing/Landing'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return (
    <StyledHomepage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VoideyBarbier | Accueil</title>
      </Helmet>
      <Landing />
      {/* <MeetUs /> */}
      <District />
      <Documentation />
    </StyledHomepage>
  )
}

export default IndexPage
