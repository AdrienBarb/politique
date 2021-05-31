import React from 'react'
import { StyledActu } from '../styles/actuStyles'
import { Helmet } from 'react-helmet'

const actualite = () => {
  return (
    <StyledActu>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VoideyBarbier | Actualité</title>
      </Helmet>
      <h1>L' ACTUALITÉ</h1>
      <div className="iframe-wrapper">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVoidey-Barbier-D%25C3%25A9partementales-2021-108658781381167&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="500"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </StyledActu>
  )
}

export default actualite
