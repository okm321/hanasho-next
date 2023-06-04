'use client'

import { ProductCard } from '@/components/product'
import { ProductAPI } from '@/types/product/api'
import { FC } from 'react'
import Style from './SeasonProductList.module.scss'
import { TopTitle } from '@/components/title'

type SeasonProductListProps = {
  /** 旬の商品 */
  products: ProductAPI[]
}

export const SeasonProductList: FC<SeasonProductListProps> = ({ products }) => {
  return (
    <section className={Style.seasonSection}>
      <TopTitle title="旬の商品" />
      <ul className={Style.seasonSectionList}>
        {products.map((product) => {
          return (
            <li className={Style.seasonSectionList__card}>
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                subtitle={product.subtitle}
                price={product.price}
                width={208}
                link={`/`}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
