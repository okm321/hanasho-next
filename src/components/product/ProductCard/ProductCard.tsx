'use client'

import { FC } from 'react'
import Style from './ProductCard.module.scss'
import Link from 'next/link'

type ProductCard = {
  /** 画像 */
  image: string
  /** 商品名 */
  name: string
  /** サブタイトル */
  subtitle: string
  /** 価格 */
  price: number
  /** リンク先 */
  link: string
  /** 幅 */
  width?: number
  /** 枠線色 */
  borderColor?: string
}

export const ProductCard: FC<ProductCard> = ({
  image,
  name,
  subtitle,
  price,
  link,
  width = 230,
  borderColor,
}) => {
  return (
    <Link
      href={link}
      className={Style.cardBlock}
      style={{ borderColor, width }}
    >
      <div className={Style.cardBlock__img}>
        <img src={image} alt={name} />
      </div>
      <div className={Style.cardBlock__info}>
        <div className={Style.cardInfo}>
          <h3 className={Style.cardInfo__subtitle}>{subtitle}</h3>
          <h4 className={Style.cardInfo__name}>{name}</h4>
        </div>
        <div className={Style.cardInfo}>
          <h4 className={Style.cardInfo__price}>¥{price.toLocaleString()}</h4>
        </div>
      </div>
    </Link>
  )
}
