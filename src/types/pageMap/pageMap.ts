import { PAGE_MAP_CATEGORY_NAME_MAP } from '@/constants'

/** ページマップの種類 */
export const PageMapCategory = {
  /** 用途でさがす */
  Use: 1,
  /** スタイルでさがす */
  Style: 2,
  /** 特集でさがす */
  Topic: 3,
  /** メニュー */
  Menu: 4,
} as const
export type PageMapCategory =
  (typeof PageMapCategory)[keyof typeof PageMapCategory]

export type PageMapCategoryName =
  (typeof PAGE_MAP_CATEGORY_NAME_MAP)[keyof typeof PAGE_MAP_CATEGORY_NAME_MAP]

/** ページマップ */
export type PageMap = {
  /** カテゴリーID */
  id: PageMapCategory
  /** カテゴリー名 */
  categoryName: PageMapCategoryName
  /** アイテム */
  items: {
    /** id */
    id: number
    /** ラベル */
    label: string
    /** リンク先 */
    link: string
  }[]
}
