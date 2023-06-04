'use client'

import { FC } from 'react'
import Style from './TopTitle.module.scss'

type TopTitleProp = {
  /** タイトル */
  title: string
}

export const TopTitle: FC<TopTitleProp> = ({ title }) => {
  return (
    <div className={Style.title}>
      <h2 className={Style.title__text}>{title}</h2>
    </div>
  )
}
