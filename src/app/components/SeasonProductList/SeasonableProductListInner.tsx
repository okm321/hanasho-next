'use client'

import { ProductCard } from '@/components/product'
import { SeasonableProductAPI } from '@/types/product/api'
import { FC } from 'react'
import { TopTitle } from '@/components/title'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/core'
import Style from './SeasonableProductList.module.scss'

type SeasonProductListProps = {
  /** 旬の商品 */
  seasonableProducts: SeasonableProductAPI[]
}

export const SeasonableProductListInner: FC<SeasonProductListProps> = ({
  seasonableProducts,
}) => {
  return (
    <section className={Style.seasonSection}>
      <TopTitle title="旬の商品" />
      <Splide
        tag="section"
        hasTrack={false}
        options={{
          type: 'loop',
          autoWidth: true,
          pagination: true,
          // autoplay: true,
          interval: 3000,
          rewind: true,
          speed: 800,
          gap: '.5em',
          trimSpace: true,
          classes: {
            pagination: `splide__pagination  ${Style.pagination}`,
            page: `splide__pagination__page ${Style.page}`,
            isActive: `is-active ${Style.isActive}`,
          },
        }}
        className={Style.seasonSectionList}
      >
        <SplideTrack>
          {seasonableProducts.map((product) => {
            return (
              <SplideSlide
                key={product.id}
                className={Style.seasonSectionList__card}
              >
                <ProductCard
                  key={product.id}
                  image={product.list_image}
                  name={product.name}
                  subtitle={product.subtitle}
                  price={product.price}
                  width={208}
                  link={`/`}
                />
              </SplideSlide>
            )
          })}
        </SplideTrack>
      </Splide>
    </section>
  )
}
