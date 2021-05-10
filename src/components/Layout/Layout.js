import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { StyledLayout } from '../../styles/layoutStyles'

const Layout = (props) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
