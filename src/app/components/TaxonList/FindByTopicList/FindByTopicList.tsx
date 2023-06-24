'use client'

import { TaxonAPI } from '@/types'
import { FC } from 'react'
import Styles from './FindByTopicList.module.scss'
import { TopTitle } from '@/components/title'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Link from 'next/link'

type Prop = {
  /** 特集で探す */
  taxon: TaxonAPI
}

export const FindByTopicList: FC<Prop> = ({ taxon }) => {
  return (
    <section className={Styles.topicSection}>
      <TopTitle title={taxon.name} />
      <Splide
        tag="section"
        hasTrack={false}
        options={{
          type: 'loop',
          autoWidth: true,
          pagination: true,
          // autoplay: true,
          interval: 3000,
          rewind: true,
          speed: 800,
          gap: '.75em',
          trimSpace: true,
          classes: {
            pagination: `splide__pagination  ${Styles.pagination}`,
            page: `splide__pagination__page ${Styles.page}`,
            isActive: `is-active ${Styles.isActive}`,
          },
        }}
        className={Styles.topicList}
      >
        <SplideTrack>
          {taxon.child_taxons.map((childTaxon) => {
            return (
              <SplideSlide
                key={childTaxon.id}
                className={Styles.topicList__card}
              >
                <Link href={`/search/topic/${childTaxon.id}`}>
                  <img
                    src={childTaxon.icon_image || ''}
                    alt={childTaxon.name}
                  />
                </Link>
              </SplideSlide>
            )
          })}
        </SplideTrack>
      </Splide>
    </section>
  )
}
