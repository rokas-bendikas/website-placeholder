import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name: 'Person 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi placeat hic impedit ullam natus aut deleniti sed amet neque quisquam, voluptas ipsa! Natus doloribus eaque molestias magni, adipisci autem.'
  },
  {
    avatar:AVTR2,
    name: 'Person 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi placeat hic impedit ullam natus aut deleniti sed amet neque quisquam, voluptas ipsa! Natus doloribus eaque molestias magni, adipisci autem.'
  },
  {
    avatar:AVTR3,
    name: 'Person 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi placeat hic impedit ullam natus aut deleniti sed amet neque quisquam, voluptas ipsa! Natus doloribus eaque molestias magni, adipisci autem.'
  },
  {
    avatar:AVTR4,
    name: 'Person 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi placeat hic impedit ullam natus aut deleniti sed amet neque quisquam, voluptas ipsa! Natus doloribus eaque molestias magni, adipisci autem.'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar,name,text},id) => {
          return(
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='Avatar One' />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>{text}</small>
            </SwiperSlide>
            )
          }
        )}
      </Swiper>
    </section>
  )
}

export default Testimonials