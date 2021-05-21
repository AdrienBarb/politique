import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { StyledLayout } from '../../styles/layoutStyles'
import { GlobalStyle } from '../../styles/globalStyles'

const Layout = (props) => {
  return (
    <StyledLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <GlobalStyle />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
