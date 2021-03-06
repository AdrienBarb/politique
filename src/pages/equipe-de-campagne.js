import React from 'react'
import { StyledTeams } from '../styles/teamsStyles'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

const Teams = () => {
  return (
    <StyledTeams>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VoideyBarbier | Candidats</title>
      </Helmet>
      <StaticImage
        src="../images/team.jpeg"
        alt="L'équipe de campagne"
        className="image"
      />

      <h1>Les candidats titulaires</h1>
      <div className="team-wrapper">
        <div className="team-card">
          <StaticImage
            src="../images/martine.jpg"
            alt="Martine Voidey"
            className="image"
          />
          <div className="infos">
            <h2>
              Martine <strong>Voidey</strong>
            </h2>
            <p>
              J’ai 61 ans, je suis maman de deux grands fils et mamie d’une
              petite-fille. <br /> Enseignante à la retraite, j’ai exercé toute
              ma carrière de professeur des écoles à Audincourt. Titulaire d’un
              diplôme de maître formateur j’ai aussi contribué à la formation
              des futurs enseignants.
              <br /> Maire de Voujeaucourt, j’ai réalisé les engagements pris :
              j’ai amélioré le cadre de vie, la sécurité et les services à la
              population. Les habitants ont témoigné leur reconnaissance du
              travail accompli, leur satisfaction et leur confiance en ma
              capacité d’agir pour eux en me portant pour la quatrième fois à la
              tête de la ville. <br /> Elue au Département depuis 2001, j’en ai
              été vice-présidente de 2004 à 2015, notamment en charge des
              routes, puis du logement.
              <br /> Cette expérience est un atout pour défendre vos intérêts et
              ceux de notre canton.
              <br /> A l’écoute de mes concitoyens, proche de leurs
              préoccupations, je recherche toujours le consensus au service de
              l’intérêt général: mes valeurs républicaines seront au service de
              tous.
            </p>
          </div>
        </div>

        <div className="team-card">
          <StaticImage
            src="../images/frederic.jpg"
            alt="Frédéric Barbier"
            className="image"
          />
          <div className="infos">
            <h2>
              Frédéric <strong>Barbier</strong>
            </h2>
            <p>
              Agé de 60 ans, père de deux grands garçons, j’ai eu la chance de
              m’épanouir professionnellement au sein d’Enedis-GRDF, entreprise
              de service public.
              <br /> Député de la 4ème circonscription du Doubs et conseiller
              départemental du canton de Valentigney, je me consacre désormais
              entièrement à mon territoire et à ses habitants.
              <br />
              Accessible, j’ai à cœur que chacun-e puisse véritablement compter
              sur ma disponibilité et ma proximité.
              <br /> Au service de tous, je m’engage au quotidien pour veiller
              au mieux-être et au mieux-vivre de mes compatriotes, au bon
              fonctionnement des associations et des institutions ainsi qu’à la
              bonne santé des entreprises, surtout en cette période compliquée.
              Je m’applique également à préserver et à défendre notre
              environnement, notre socle républicain et notre modèle social à la
              française.
              <br />
              Je me présente à cette élection avec l’investiture de «
              Territoires de Progrès », parti social-réformiste de gauche dont
              j’ai contribué à la création en 2020 aux côtés des ministres
              Jean-Yves Le Drian et Olivier Dussopt.
              <br /> Cherchant à rassembler autour des valeurs d’humanisme, de
              fraternité, d’authenticité, de partage et de respect, ma
              détermination et ma motivation à servir l’intérêt général restent
              sans faille.
            </p>
          </div>
        </div>
      </div>

      <h1>Les candidats remplaçants</h1>
      <div className="team-wrapper">
        <div className="team-card">
          <StaticImage
            src="../images/stephanie.jpg"
            alt="Stéphanie BOURQUIN"
            className="image"
          />
          <div className="infos">
            <h2>
              Stéphanie <strong>BOURQUIN</strong>
            </h2>
            <p>
              J’ai 46 ans, je suis pacsée et maman de deux collégiens. J’ai
              débuté ma carrière d’infirmière en 1998 et j’exerce comme cadre
              infirmière dans une institution de soins pour personnes âgées
              depuis 2013.
              <br />
              Habitant Valentigney depuis 2006, j’ai souhaité m’engager au
              service de ma ville : j’ai été élue conseillère municipale en
              2020, et je siège au sein du groupe d’opposition. Cette première
              expérience dans la vie politique locale m’a donné l’envie de
              m’investir pour notre canton, aux côtés de Martine, Frédéric et
              Nuno.
              <br /> Les principes républicains, ainsi que la solidarité, le
              respect et l’écoute, sont les valeurs qui me tiennent à cœur. Je
              m’attache à les transmettre et les défendre. Elles guideront mon
              action, et je serai un relais efficace pour les habitants de ma
              commune et de notre canton.
            </p>
          </div>
        </div>

        <div className="team-card">
          <StaticImage
            src="../images/nuno.jpg"
            alt="Nuno MADEIRA"
            className="image"
          />
          <div className="infos">
            <h2>
              Nuno <strong>MADEIRA</strong>
            </h2>
            <p>
              J’ai 45 ans, je suis natif de Seloncourt où j’ai grandi. Après des
              études à Besançon, j’habite depuis 21 ans à Mandeure, avec ma
              conjointe et nos deux enfants.
              <br /> Professeur des écoles, j’ai enseigné à Valentigney, tout
              d’abord durant 8 ans à l’école Donzelot dans le quartier des Buis,
              puis 10 ans à l’école des Chardonnerets en étant le directeur.
              <br /> Actuellement en poste à Audincourt, j’assume toujours des
              fonctions de directeur d’école.
              <br /> Engagé pour la première fois dans l’élection municipale de
              Mandeure en 2020, sur une liste avec des valeurs de gauche,
              j’avais le désir de changer les choses pour ma ville, en apportant
              ma pierre à l’édifice.
              <br /> C’est cette même volonté d’améliorer le quotidien des
              habitants, cette fois à l’échelon départemental, qui m’a conduit à
              m’engager aux côtés de Martine, Frédéric et Stéphanie.
            </p>
          </div>
        </div>
      </div>
    </StyledTeams>
  )
}

export default Teams
