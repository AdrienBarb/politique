import React from 'react'
import { StyledMeetUs } from '../../../styles/meetUsStyles'
import MeetingCard from './MeetingCard'

const MeetUs = () => {
  return (
    <StyledMeetUs>
      <h1>Nous rencontrer</h1>
      <h2>Les réunions à venir :</h2>
      <MeetingCard
        title="Réunion publique"
        date="Mardi 16 Mai à 20h00"
        placeName="Mairie de Valentigney"
        address="6 place Emile Peugeot"
        zipCode="25700"
        city="Valentigney"
        link="www.google.com"
        labelLink="Rejoindre la réunion"
        online={true}

      />
    </StyledMeetUs>
  )
}

export default MeetUs
