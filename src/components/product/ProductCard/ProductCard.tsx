'use client'

import { FC } from 'react'
import Styles from './ProductCard.module.scss'
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
  /** ランキング情報 */
  rankingInfo?: {
    /** ランキング */
    ranking: number
    /** 背景色 */
    backgroundColor?: string
    /** 文字色 */
    textColor?: string
  }
}

export const ProductCard: FC<ProductCard> = ({
  image,
  name,
  subtitle,
  price,
  link,
  width = 230,
  borderColor,
  rankingInfo,
}) => {
  return (
    <Link
      href={link}
      className={Styles.cardBlock}
      style={{ borderColor, width }}
    >
      <div>
        <div className={Styles.cardInfo}>
          {rankingInfo && (
            <div
              className={Styles.cardInfo__ranking}
              style={{
                backgroundColor: rankingInfo.backgroundColor || 'black',
                color: rankingInfo.textColor || 'white',
              }}
            >
              {rankingInfo.ranking}
            </div>
          )}
          <div className={Styles.cardInfo__img}>
            <img src={image} alt={name} />
          </div>
          <h3 className={Styles.cardInfo__subtitle}>{subtitle}</h3>
          <h4 className={Styles.cardInfo__name}>{name}</h4>
        </div>
      </div>
      <h4 className={Styles.cardBlock__price}>¥{price.toLocaleString()}</h4>
    </Link>
  )
}
