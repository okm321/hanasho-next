import { TaxonType } from '@/types/taxon'

export const TAXON_TYPE_LABEL_MAP = {
  [TaxonType.Use]: '用途でさがす',
  [TaxonType.Style]: 'スタイルでさがす',
  [TaxonType.Topic]: '特集でさがす',
  [TaxonType.Material]: '主要花材でさがす',
} as const
