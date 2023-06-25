'use client'

import { IconWithText } from '@/components/cardItem'
import { TopTitle } from '@/components/title'
import { TaxonAPI } from '@/types'
import { FC } from 'react'
import Styles from './FindByUseList.module.scss'

type Prop = {
  /** 用途で探す */
  taxon: TaxonAPI
}

export const FindByUseList: FC<Prop> = ({ taxon }) => {
  return (
    <section className={Styles.useSection}>
      <TopTitle title={taxon.name} />
      <ul className={Styles.useList}>
        {taxon.child_taxons.map((taxon) => {
          return (
            <li key={taxon.id} className={Styles.useList__item}>
              <IconWithText
                id={taxon.id}
                icon={taxon.icon_image || ''}
                text={taxon.name}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
