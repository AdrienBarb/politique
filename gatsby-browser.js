import React from 'react'

import Layout from './src/components/Layout'
import { GlobalStyle } from './src/styles/globalStyles'

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
  )
}
