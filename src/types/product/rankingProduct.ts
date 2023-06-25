import { RANKING_PRODUCT_COLOR_MAP } from '@/constants/Product'
import { ProductAPI } from './api'

/** ランキングで使用する色 */
export const RankingNumberType = {
  /** 1位 */
  Gold: 1,
  /** 2位 */
  Silver: 2,
  /** 3位 */
  Bronze: 3,
} as const
export type RankingNumberType =
  (typeof RankingNumberType)[keyof typeof RankingNumberType]

export type RankingProductColor =
  (typeof RANKING_PRODUCT_COLOR_MAP)[keyof typeof RANKING_PRODUCT_COLOR_MAP]

export type ConvertedRankingProduct = ProductAPI & {
  /** ランキング情報 */
  rankingInfo: {
    /** ランキング */
    ranking: number
    /** 背景色 */
    backgroundColor: RankingProductColor | 'black'
    /** テキストカラー */
    textColor: string
  }
}
