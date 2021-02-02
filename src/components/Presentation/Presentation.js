import React from 'react'
import classes from './Presentation.module.scss'
import NavButton from '../NavButton/NavButton'
import profil from '../../images/profil.jpg'

const Presentation = () => {
    return (
        <section className={classes.presentationWrapper}>
            <img className={classes.image} src={profil} alt="Photo Fréderic Barbier" />
            <div className={classes.contentWrapper}>
                <div className={classes.title}>
                    Fréderic Barbier
                </div>
                <div className={classes.subTitle}>
                    Député de la 4eme circonscription du Doubs
                </div>
                <div className={classes.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </div>
                <NavButton direction={'mon-engagement'}>Découvrir mon enganement</NavButton>
            </div>
        </section>
    )
}

export default Presentation
