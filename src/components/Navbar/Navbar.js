import React from 'react'
import classes from './Navbar.module.scss'
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <div className={classes.navBar}>
            <div className={classes.homeLinks}>
                <Link to="/">Fréderic Barbier</Link>
            </div>

            <div className={classes.navLinks}>
                <Link to="/actualites">Actualités</Link>
                <Link to="/mon-engagement">Mon Engagement</Link>
                <Link to="/nous-connaitre">Nous connaître</Link>
                <Link to="/me-contacter">Me contacter</Link>
            </div>
        </div>
    )
}

export default Navbar
