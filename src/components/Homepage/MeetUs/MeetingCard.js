import React from 'react'
import { StyledMeetingCard } from '../../../styles/meetingCardStyles'

const MeetingCard = ({
  title,
  details,
  date,
  placeName,
  address,
  zipCode,
  city,
  labelLink,
  link,
  online,
}) => {
  return (
    <StyledMeetingCard>
      <h1>{date}</h1>
      <div className="info">
        <div className="event">
          <h2>Évènement :</h2>
          <p>{title}</p>
        </div>
        <div className="place">
          <h2>Lieu :</h2>
          {online ? (
            <p>En ligne (Zoom)</p>
          ) : (
            <p>
              {placeName} <br /> {address}, <br /> {zipCode} {city}{' '}
            </p>
          )}
        </div>
      </div>
      <a className="link" href={link} target="_blank" rel="noreferrer">
        {online ? 'Rejoindre la réunion' : 'Me rendre sur place'}
      </a>
    </StyledMeetingCard>
  )
}

export default MeetingCard
