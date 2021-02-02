import React from 'react'
import classes from './Navbar.module.scss'
import { Link } from "gatsby"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FullNav from '../FullNav/FullNav'

const Navbar = () => {
    const matches = useMediaQuery('(min-width:768px)');
    console.log(matches)

    let render = null;
    if(!matches) {
        render = (
            <FullNav />
        )
    } else {
        render = (
            <div className={classes.navLinks}>
                <Link to="/actualites" >Actualités</Link>
                <Link to="/mon-engagement" >Mon Engagement</Link>
                <Link to="/nous-connaitre" >Nous connaître</Link>
                <Link to="/me-contacter" >Me contacter</Link>
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
