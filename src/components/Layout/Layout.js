import React from 'react'
import classes from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    return (
        <>
            <Navbar />
                <div>
                    {props.children}
                </div>
            <Footer />
        </>
    )
}

export default Layout
