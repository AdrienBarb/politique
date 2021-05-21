import React from 'react'
import { StyledMeetUs } from '../../../styles/meetUsStyles'
import MeetingCard from './MeetingCard'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const MeetUs = () => {
  const sm = useMediaQuery('(max-width:1024px)')
  const tb = useMediaQuery('(max-width:768px)')
  let slideToShow = 3
  if (sm) {
    slideToShow = 2
  }

  if (tb) {
    slideToShow = 1
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
  }

  return (
    <StyledMeetUs>
      <div className="wrapper">
        <h1>Nous rencontrer</h1>
        <p>
          Nous serons présents sur chaque commune et joignable au 06 66 84 50 23
          pour vous rencontrer lors de nos visites dans le respect des gestes
          barrières
        </p>
        <Slider {...settings}>
          {events.map((event, index) => {
            return (
              <MeetingCard key={index} place={event.place} date={event.date} />
            )
          })}
        </Slider>
      </div>
    </StyledMeetUs>
  )
}

export default MeetUs

const events = [
  {
    place: 'Bourguignon',
    date: 'Samedi 22 mai de 10H à 12H00',
  },
  {
    place: 'Neuchâtel-Urtière',
    date: 'Samedi 22 mai de 14H à 15H30',
  },
  {
    place: 'Rémondans-Vaivre',
    date: 'Samedi 22 mai de 15H30 à 17H00',
  },
]
