import React from 'react'
import { StyledMeetUs } from '../../../styles/meetUsStyles'
import MeetingCard from './MeetingCard'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const MeetUs = () => {
  return (
    <StyledMeetUs>
      <h1>Nous rencontrer</h1>
      <h2>Les réunions à venir :</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log('')}
        onSlideChange={() => console.log('')}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </StyledMeetUs>
  )
}

export default MeetUs
