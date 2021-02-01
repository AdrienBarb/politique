import React from 'react'
import classes from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    return (
        <>
            <Navbar />
                <main className={classes.layout}>
                    {props.children}
                </main>
            <Footer />
        </>
    )
}

export default Layout
