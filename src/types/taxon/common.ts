/** 分類の種類 */
export const TaxonType = {
  /** 用途で探す */
  Use: 1,
  /** スタイルで探す */
  Style: 2,
  /** 特集で探す */
  Topic: 3,
  /** 主要花材で探す */
  Material: 4,
} as const
export type TaxonType = (typeof TaxonType)[keyof typeof TaxonType]
