import React from 'react'
import classes from './Footer.module.scss'
import linkedin from '../../images/icon_linkedin.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.followUs}>
                Nous suivre sur les réseaux:
            </div>
            <div className={classes.socialLinks}>
                <img src={linkedin} alt="social link linkedin" />
                <img src={facebook} alt="social link linkedin" />
                <img src={twitter} alt="social link linkedin" />
            </div>
        </footer>
    )
}

export default Footer
