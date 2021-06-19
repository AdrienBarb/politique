import React from 'react'
import { SnackbarProvider } from 'notistack'
import Layout from './src/components/Layout/Layout'
import { StyledMaintenance } from './src/styles/maintenanceStyles'

export const wrapRootElement = ({ element }) => {
  return (
    <StyledMaintenance>Site temporairement indisponible</StyledMaintenance>
    // <Layout>
    //   <SnackbarProvider maxSnack={3}>{element}</SnackbarProvider>
    // </Layout>
  )
}
