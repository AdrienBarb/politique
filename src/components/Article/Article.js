import React from 'react'
import classes from './Article.module.scss'
import styled from 'styled-components'
import Moment from 'moment';
import NavButton from '../NavButton/NavButton'

const Article = (props) => {
    const date = Moment(props.data.createdAt ? props.data.createdAt : null).format('DD/MM/YYYY')
    const string = props.data.description.description.slice(0, 100)
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
                    {date}
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
            <NavButton>Voir l'article</NavButton>
            
        </div>
    )
}

export default Article
