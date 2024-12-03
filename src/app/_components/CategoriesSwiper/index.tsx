'use client'
import React from 'react'
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Category } from '../../../payload/payload-types'
import CategoryCardSwiper from './CategoryCardSwiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import classes from './index.module.scss'

const CategoriesSwiper = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classes.container}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        spaceBetween={0}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          type: 'bullets',
        }}
        mousewheel={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.7,
          slideShadows: false,
        }}
        className={classes.carousel}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {categories.map(category => (
          <SwiperSlide key={category.id}>
            <CategoryCardSwiper category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CategoriesSwiper
