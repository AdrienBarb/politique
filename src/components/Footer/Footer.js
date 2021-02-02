import React from 'react'
import classes from './Footer.module.scss'
import linkedin from '../../images/icon_linkedin.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.followUs}>
                Nous suivre sur les réseaux:
            </div>
            <div className={classes.socialLinks}>
                <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-barbier-828a69183/" target="_blank" >
                    <img src={linkedin} alt="social link linkedin" />
                </a>
                <a href="https://www.facebook.com/frederic.barbier.73" target="_blank" >
                    <img src={facebook} alt="social link linkedin" />
                </a>
                <a href="https://twitter.com/Fred_Barbier" target="_blank" >
                    <img src={twitter} alt="social link linkedin" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
