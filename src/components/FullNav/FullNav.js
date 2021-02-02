import React, { useState, useRef } from 'react'
import classes from './FullNav.module.scss'
import { Cross as Hamburger } from 'hamburger-react'
import { Link } from "gatsby";
import { gsap } from "gsap/all";

const FullNav = () => {
    const [isOpen, setOpen] = useState(false)

    let fullNav = useRef(null);

    const timeline = gsap.timeline();

    const handleAnimation = () => {
        if (isOpen) {
            timeline.to(fullNav.current, {duration: 0.4, opacity: 0, ease: "power2.inOut" });
            timeline.to(fullNav.current, {duration: 0, css: {visibility: 'hidden'}})
        } else {
            timeline.to(fullNav.current, {duration: 0, css: {visibility: 'visible'}})
            timeline.to(fullNav.current, {duration: 0.4, opacity: 1, ease: "power2.inOut" });
        }
    }

    return (
        <div>
            <div onClick={() => handleAnimation()} className={classes.humburger}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
            </div>
            <div ref={fullNav} className={classes.fullNavWrapper}>
                <div className={classes.navLinks}>
                    <Link to="/actualites" >Actualités</Link>
                    <Link to="/mon-engagement" >Mon Engagement</Link>
                    <Link to="/nous-connaitre" >Nous connaître</Link>
                    <Link to="/me-contacter" >Me contacter</Link>
                </div>
            </div>

        </div>
    )
}

export default FullNav
