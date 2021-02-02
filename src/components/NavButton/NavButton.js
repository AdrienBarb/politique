import React from 'react'
import classes from './NavButton.module.scss'
import { navigate } from "gatsby";

const NavButton = (props) => {

    const handleNavigation = () => {
        navigate(`/${props.direction}`)
    }

    return (
        <div className={classes.navButton} onClick={() => handleNavigation()}>
            {props.children}
        </div>
    )
}

export default NavButton
