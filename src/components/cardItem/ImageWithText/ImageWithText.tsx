'use client'
import Link from 'next/link'
import { FC } from 'react'
import Styles from './ImageWithText.module.scss'

type ImageWithTextProps = {
  /** 画像 */
  image: string
  /** id */
  id: number
  /** スタイル名 */
  name: string
  /** 幅 */
  width?: number
}

export const ImageWithText: FC<ImageWithTextProps> = ({
  image,
  id,
  name,
  width,
}) => {
  return (
    <Link
      href={`/search/${id}?type=style`}
      className={Styles.card}
      style={{ width }}
    >
      <div className={Styles.card__img}>
        <img src={image} alt={name} />
      </div>
      <h3 className={Styles.card__text}>{name}</h3>
    </Link>
  )
}
