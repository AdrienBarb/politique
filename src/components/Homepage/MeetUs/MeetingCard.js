import { PlaceTwoTone } from '@material-ui/icons'
import React from 'react'
import { StyledMeetingCard } from '../../../styles/meetingCardStyles'

const MeetingCard = ({ place, date }) => {
  return (
    <StyledMeetingCard>
      <h1>{place}</h1>
      <p>Le {date}</p>
    </StyledMeetingCard>
  )
}

export default MeetingCard
