import React from 'react'
import classes from './Navbar.module.scss'
import { Link } from "gatsby"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FullNav from '../FullNav/FullNav'

const Navbar = () => {
    const matches = useMediaQuery('(min-width:768px)');

    let render = null;
    if(!matches) {
        render = (
            <FullNav />
        )
    } else {
        render = (
            <div className={classes.navLinks}>
                <Link to="/actualites" activeStyle={{ borderBottom: "3px solid #719D69" }}>Actualités</Link>
                <Link to="/mon-engagement" activeStyle={{ borderBottom: "3px solid #719D69" }}>Mon Engagement</Link>
                <Link to="/nous-connaitre" activeStyle={{ borderBottom: "3px solid #719D69" }}>Nous connaître</Link>
                <Link to="/me-contacter" activeStyle={{ borderBottom: "3px solid #719D69" }}>Me contacter</Link>
            </div>
        )
    }

    return (
        <div className={classes.navBar}>
        <div className={classes.homeLinks}>
            <Link to="/">Fréderic Barbier</Link>
        </div>

        {render}
    </div>

    )
}

export default Navbar
