import * as React from "react"
import '../styles/index.scss'
import Layout from '../components/Layout/Layout'
import Presentation from '../components/Presentation/Presentation'
import Information from '../components/Information/Information'

const IndexPage = () => {
  return (
    <Layout>
      <Presentation />
      <Information />
    </Layout>
  )
}

export default IndexPage
