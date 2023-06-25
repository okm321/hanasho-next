import { PAGE_MAP_CATEGORY_NAME_MAP } from '@/constants'

/** フッターナビゲーションの種類 */
export const PageMapCategory = {
  /** 用途でさがす */
  Use: 0,
  /** スタイルでさがす */
  Style: 1,
  /** 特集でさがす */
  Topic: 2,
  /** メニュー */
  Menu: 3,
} as const
export type PageMapCategory =
  (typeof PageMapCategory)[keyof typeof PageMapCategory]

export type PageMapCategoryName =
  (typeof PAGE_MAP_CATEGORY_NAME_MAP)[keyof typeof PAGE_MAP_CATEGORY_NAME_MAP]

/** フッターのナビゲーション */
export type FooterNavigation = {
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
  }[]
}
