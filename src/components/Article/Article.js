import React from 'react'
import classes from './Article.module.scss'
import styled from 'styled-components'
import NavButton from '../NavButton/NavButton'

const Article = (props) => {
    const string = props.data.description.description ? props.data.description.description.slice(0, 100) : null
    const description = string + '...'

    const Image = styled.div`
        background-image: url('${props.data.image.fluid.src}');
        width: 320px;
        height: 220px;
        background-size: cover;
        background-position: center;
   `

    return (
        <div className={classes.article}>
            <div className={classes.imageWrapper}>
                <Image />
                <div className={classes.date}>
                    {props.data.createdAt ? props.data.createdAt : null}
                </div>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.title}>
                    {props.data.titre ? props.data.titre : null}
                </div>
                <div className={classes.content}>
                    {description}
                </div>
            </div>
            <NavButton direction={props.data.contentful_id ? props.data.contentful_id : null }>Voir l'article</NavButton>
            
        </div>
    )
}

export default Article
