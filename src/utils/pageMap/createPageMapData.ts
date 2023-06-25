import { PageMap, PageMapCategory, TaxonAPI, TaxonType } from '@/types'
import { createLinkFormat } from './createLinkFormat'
import { PAGE_MAP_CATEGORY_NAME_MAP } from '@/constants'
import { omitNullableHandler } from '../common'

export const createPageMapData = (taxons: TaxonAPI[]): PageMap[] => {
  const pageMapDataFromTaxons = taxons
    .map((taxon): PageMap | null => {
      if (taxon.id === TaxonType.Material) {
        return null
      }
      return {
        id: taxon.id,
        categoryName: PAGE_MAP_CATEGORY_NAME_MAP[taxon.id],
        items: taxon.child_taxons.map((childTaxon) => {
          return {
            id: childTaxon.id,
            label: childTaxon.name,
            link: createLinkFormat(taxon.id, childTaxon.id),
          }
        }),
      }
    })
    .filter(omitNullableHandler)
  const menuData = {
    id: PageMapCategory.Menu,
    categoryName: PAGE_MAP_CATEGORY_NAME_MAP[PageMapCategory.Menu],
    items: [
      {
        id: 1,
        label: 'サービス一覧',
        link: '/services',
      },
      {
        id: 2,
        label: '花将について',
        link: '/about',
      },
      {
        id: 3,
        label: 'お問い合わせ',
        link: '/contact',
      },
      {
        id: 4,
        label: 'ご利用案内',
        link: '/faq',
      },
    ],
  }
  return [...pageMapDataFromTaxons, menuData]
}
