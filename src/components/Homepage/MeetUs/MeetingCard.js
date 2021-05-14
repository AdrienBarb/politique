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
      <h1>{title}</h1>
      <div className="info">
      <div className="details">
          <h2>Détail</h2>
          <p>{details}</p>
        </div>
        <div className="date">
          <h2>Date</h2>
          <p>{date}</p>
        </div>
        <div className="place">
          <h2>Lieu</h2>
          {online ? (
            <p>En ligne</p>
          ) : (
            <p>
              {placeName} <br /> {address}, <br /> {zipCode} {city}{' '}
            </p>
          )}
        </div>
      </div>
      <a className="link" href={link}>
        {labelLink}
      </a>
    </StyledMeetingCard>
  )
}

export default MeetingCard
