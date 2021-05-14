import React from 'react'
import { StyledTeams } from '../styles/teamsStyles'
// @ts-ignore
import frederic from '../images/frederic.jpg'
// @ts-ignore
import nuno from '../images/nuno.jpg'
// @ts-ignore
import stephanie from '../images/stephanie.jpg'
// @ts-ignore
import martine from '../images/martine.jpg'

const Teams = () => {
  return (
    <StyledTeams>
      <h1>L’équipe de campagne</h1>
      <div className="team-wrapper">
        <div className="team-card">
          <img src={martine} alt="Martine Voidey" />
          <div className="infos">
            <h1>
              Martine <strong>Voidey</strong>
            </h1>
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
          <img src={frederic} alt="Frédéric Barbier" />
          <div className="infos">
            <h1>
              Frédéric <strong>Barbier</strong>
            </h1>
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
              <br /> Cherchant à rassembler autour des valeurs d’humanisme, de
              fraternité, d’authenticité, de partage et de respect, ma
              détermination et ma motivation à servir l’intérêt général restent
              sans faille.
            </p>
          </div>
        </div>

        <div className="team-card">
          <img src={stephanie} alt="Stéphanie BOURQUIN" />
          <div className="infos">
            <h1>
              Stéphanie <strong>BOURQUIN</strong>
            </h1>
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
          <img src={nuno} alt="Nuno MADEIRA" />
          <div className="infos">
            <h1>
              Nuno <strong>MADEIRA</strong>
            </h1>
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
