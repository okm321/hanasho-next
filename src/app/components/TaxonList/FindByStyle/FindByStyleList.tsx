'use client'

import { StyleCard } from '@/components/styleCard'
import { TopTitle } from '@/components/title'
import { TAXON_TYPE_LABEL_MAP } from '@/constants/Taxon'
import { TaxonAPI, TaxonType } from '@/types'
import { FC } from 'react'
import Styles from './FindByStyleList.module.scss'

type Prop = {
  /** スタイルで探す */
  taxon: TaxonAPI
}

export const FindByStyleList: FC<Prop> = ({ taxon }) => {
  return (
    <section className={Styles.styleSection}>
      <TopTitle title={TAXON_TYPE_LABEL_MAP[taxon.id]} />
      <ul className={Styles.styleList}>
        {taxon.child_taxons.map((taxon) => {
          return (
            <li key={taxon.id} className={Styles.styleList__item}>
              <StyleCard
                id={taxon.id}
                image={taxon.icon_image || ''}
                name={taxon.name}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
