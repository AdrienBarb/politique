import React from 'react'
import { SnackbarProvider } from 'notistack'
import Layout from './src/components/Layout/Layout'

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      <SnackbarProvider maxSnack={3}>{element}</SnackbarProvider>
    </Layout>
  )
}
