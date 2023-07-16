'use client'

import { ProductCard } from '@/components/product'
import { ProductAPI } from '@/types/product/api'
import { FC } from 'react'
import { TopTitle } from '@/components/title'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/core'
import Styles from './SeasonableProductList.module.scss'

type SeasonProductListProps = {
  /** 旬の商品 */
  seasonableProducts: ProductAPI[]
}

export const SeasonableProductListInner: FC<SeasonProductListProps> = ({
  seasonableProducts,
}) => {
  return (
    <section className={Styles.seasonSection}>
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
            pagination: `splide__pagination  ${Styles.pagination}`,
            page: `splide__pagination__page ${Styles.page}`,
          },
        }}
        className={Styles.seasonSectionList}
      >
        <SplideTrack>
          {seasonableProducts.map((product) => {
            return (
              <SplideSlide
                key={product.id}
                className={Styles.seasonSectionList__card}
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
