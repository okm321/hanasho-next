'use client'
import { FC } from 'react'
import Styles from './IconWithText.module.scss'
import Link from 'next/link'

type IconWithTextProps = {
  /** アイコン */
  icon: string
  /** id */
  id: number
  /** テキスト */
  text: string
  /** 幅 */
  width?: number
}

export const IconWithText: FC<IconWithTextProps> = ({
  icon,
  id,
  text,
  width,
}) => {
  return (
    <Link
      href={`/search/${id}?type=use`}
      style={{ width }}
      className={Styles.card}
    >
      <div className={Styles.card__img}>
        <img src={icon} alt={text} />
      </div>
      <h3 className={Styles.card__text}>{text}</h3>
    </Link>
  )
}
