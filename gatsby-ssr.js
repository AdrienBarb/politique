import React from 'react'
import { SnackbarProvider } from 'notistack'
import Layout from './src/components/Layout/Layout'
import { GlobalStyle } from './src/styles/globalStyles'

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      <GlobalStyle />
      <SnackbarProvider maxSnack={3}>{element}</SnackbarProvider>
    </Layout>
  )
}
