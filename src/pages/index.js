import * as React from 'react'
import '../styles/index.scss'
import Layout from '../components/Layout/Layout'
import Presentation from '../components/Presentation/Presentation'
import Information from '../components/Information/Information'
import LastArticles from '../components/LastArticles/LastArticles'
import { StyledConstructionSite } from '../styles/globalStyles'

const IndexPage = () => {
  return (
    // <Layout>
    //   <Presentation />
    //   <Information />
    //   <LastArticles />
    // </Layout>

    <StyledConstructionSite>
      Site en construction <br/>
      - <br/>
      Élections régionales 2021
    </StyledConstructionSite>
  )
}

export default IndexPage
