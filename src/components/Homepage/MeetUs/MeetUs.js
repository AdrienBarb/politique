import React from 'react'
import { StyledMeetUs } from '../../../styles/meetUsStyles'
import MeetingCard from './MeetingCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const MeetUs = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <StyledMeetUs>
      <h1>Nous rencontrer</h1>
      <h2>Les réunions à venir :</h2>
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
    </StyledMeetUs>
  )
}

export default MeetUs

const events = [
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: false,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: false,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
  {
    title: "Réunion publique",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "Mardi 16 Mai à 20h00",
    placeName: "Mairie de Valentigney",
    address: "6 place Emile Peugeot",
    zipCode: "25700",
    city: "Valentigney",
    link: "www.google.com",
    labelLink: "Rejoindre la réunion",
    online: true,
  },
]
