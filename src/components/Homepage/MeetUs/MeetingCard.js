import React from 'react'
import { StyledMeetingCard } from '../../../styles/meetingCardStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const MeetingCard = ({
  title,
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
        <div className="date">
          <FontAwesomeIcon icon={faClock} />
          <p>{date}</p>
        </div>
        <div className="place">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
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
