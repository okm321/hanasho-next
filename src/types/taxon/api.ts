import { TaxonType } from './common'

/** 子分類 */
export type ChildTaxonsAPI = {
  /* 識別子 */
  id: number
  /** 名前 */
  name: string
  /** アイコン画像 */
  icon_image: string | null
}

/** 分類 */
export type TaxonAPI = {
  /** 識別子 */
  id: TaxonType
  /** 名前 */
  name: string
  /** 子分類 */
  child_taxons: ChildTaxonsAPI[]
}

/** 分類Raw */
export type TaxonAPIRaw = {
  taxons: TaxonAPI[]
}
