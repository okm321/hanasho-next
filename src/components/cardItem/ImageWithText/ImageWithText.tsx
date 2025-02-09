'use client'
import Link from 'next/link'
import { FC } from 'react'
import Styles from './ImageWithText.module.scss'

type ImageWithTextProps = {
  /** 画像 */
  image: string
  /** id */
  id: number
  /** テキスト */
  text: string
  /** 幅 */
  width?: number
}

export const ImageWithText: FC<ImageWithTextProps> = ({
  image,
  id,
  text,
  width,
}) => {
  return (
    <Link
      href={`/search/${id}?type=style`}
      className={Styles.card}
      style={{ width }}
    >
      <div className={Styles.card__img}>
        <img src={image} alt={text} />
      </div>
      <h3 className={Styles.card__text}>{text}</h3>
    </Link>
  )
}
