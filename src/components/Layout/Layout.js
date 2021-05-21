import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { StyledLayout } from '../../styles/layoutStyles'
import { GlobalStyle } from '../../styles/globalStyles'

const Layout = (props) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
