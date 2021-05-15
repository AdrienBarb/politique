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
      <h1>Nous rencontrer</h1>
      <h2>Les réunions à venir :</h2>
      <div className="horizontal-divider"></div>
      <Slider {...settings}>
        {events.map((event, index) => {
          return (
            <MeetingCard
              key={index}
              title={event.title}
              details={event.details}
              date={event.date}
              placeName={event.placeName}
              address={event.address}
              zipCode={event.zipCode}
              city={event.city}
              link={event.link}
              labelLink={event.labelLink}
              online={event.online}
            />
          )
        })}
      </Slider>
      <div className="horizontal-divider"></div>
    </StyledMeetUs>
  )
}

export default MeetUs

const events = [
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: false,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: false,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
  {
    title: 'Réunion publique',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: 'Mardi 16 Mai à 20h00',
    placeName: 'Mairie de Valentigney',
    address: '6 place Emile Peugeot',
    zipCode: '25700',
    city: 'Valentigney',
    link: 'https://www.google.com/maps/dir//google+maps+valentigney+mairie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4792109f636776b3:0x7ba61981cbbb331?sa=X&ved=2ahUKEwjdq-L0ksvwAhULlhQKHTHmAyUQ9RcwFHoECDsQBA',
    online: true,
  },
]
