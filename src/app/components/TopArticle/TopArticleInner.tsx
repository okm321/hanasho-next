'use client'

import { SlideAPI } from '@/types'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'

type ArticleProp = {
  slides: SlideAPI[]
}

export const TopArticleInner: FC<ArticleProp> = ({ slides }) => {
  return (
    <Splide
      options={{
        focus: 'center',
        fixedWidth: '80%',
        type: 'loop',
      }}
    >
      {slides.map((slide) => {
        return (
          <SplideSlide key={slide.id}>
            <div>
              <img src={slide.image_url} alt="" />
            </div>
          </SplideSlide>
        )
      })}
    </Splide>
  )
}
