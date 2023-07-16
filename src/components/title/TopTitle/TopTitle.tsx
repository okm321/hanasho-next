'use client'

import { FC } from 'react'
import Styles from './TopTitle.module.scss'

type TopTitleProp = {
  /** タイトル */
  title: string
}

export const TopTitle: FC<TopTitleProp> = ({ title }) => {
  return (
    <h2 className={Styles.title}>
      <span className={Styles.title__text}>{title}</span>
    </h2>
  )
}
