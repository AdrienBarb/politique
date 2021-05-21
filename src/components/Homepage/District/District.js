import React from 'react'
import { StyledDistrict } from '../../../styles/districtStyles'
import { StaticImage } from 'gatsby-plugin-image'

const District = () => {
  return (
    <StyledDistrict
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <span className="divider"></span>
      <div className="container">
        <div className="district-details">
          <h2>Le canton de Valentigney</h2>
          <p>
            Le nouveau canton de Valentigney qui est entré en vigueur à
            l’occasion des élections départementales de mars 2015 a été formé
            par 12 communes du canton de Pont de Roide -Vermondans et les 3
            communes du canton de Valentigney. Afin de permettre la parité
            parfaite femme/homme au sein du Conseil départemental, le mode de
            scrutin retenu a été celui du scrutin majoritaire binominal mixte.
            Les électeurs de chaque canton élisent au Conseil départemental deux
            membres de sexe différent, qui se présentent en binôme avec chacun
            une remplaçante femme pour la candidate et un remplaçant homme pour
            le candidat. Ce qui permet en cas de remplacement du ou de la
            titulaire de toujours conserver la parité au sein de l’Assemblée
            départementale.
          </p>
          <p>
            Avant le renouvellement de 2015, Martine Voidey était la conseillère
            départementale du canton de Valentigney et Frédéric Barbier le
            conseiller départemental du canton de Pont de Roide - Vermondans.
            Réélus en binôme lors des élections de mars 2015 sur ce nouveau
            canton, ils sont candidats à leur succession, tous deux sont
            originaires du canton (Martine de voujeaucourt et Frédéric de Pont
            de Roide - Vermondans), ils forment pour cette élection une équipe
            avec Stéphanie BOURQUIN conseillère municipale de Valentigney et
            Nuno MADEIRA candidat aux élections municipales 2020 à Mandeure.
          </p>
        </div>
        <div className="image-wrapper">
          <StaticImage
            src="../../../images/canton-valentigney.png"
            alt="Canton de Valentigney"
            className="image"
          />
        </div>
      </div>
      <span className="divider"></span>
    </StyledDistrict>
  )
}

export default District
