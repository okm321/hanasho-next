'use client'

import { ImageWithText } from '@/components/cardItem'
import { TopTitle } from '@/components/title'
import { TaxonAPI } from '@/types'
import { FC } from 'react'
import Styles from './FindByStyleList.module.scss'

type Prop = {
  /** スタイルで探す */
  taxon: TaxonAPI
}

export const FindByStyleList: FC<Prop> = ({ taxon }) => {
  return (
    <section className={Styles.styleSection}>
      <TopTitle title={taxon.name} />
      <ul className={Styles.styleList}>
        {taxon.child_taxons.map((taxon) => {
          return (
            <li key={taxon.id} className={Styles.styleList__item}>
              <ImageWithText
                id={taxon.id}
                image={taxon.icon_image || ''}
                text={taxon.name}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
