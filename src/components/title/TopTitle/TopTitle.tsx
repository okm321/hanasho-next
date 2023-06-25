'use client'

import { FC } from 'react'
import Style from './TopTitle.module.scss'

type TopTitleProp = {
  /** タイトル */
  title: string
}

export const TopTitle: FC<TopTitleProp> = ({ title }) => {
  return (
    <h2 className={Style.title}>
      <span className={Style.title__text}>{title}</span>
    </h2>
  )
}
