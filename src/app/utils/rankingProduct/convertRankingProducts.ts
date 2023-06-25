import { RANKING_PRODUCT_COLOR_MAP } from '@/constants/Product'
import { ProductAPI } from '@/types'
import {
  ConvertedRankingProduct,
  RankingProductColor,
} from '@/types/product/rankingProduct'

const getRankColor = (rank: number): RankingProductColor | 'black' => {
  if (rank === 1 || rank === 2 || rank === 3) {
    return RANKING_PRODUCT_COLOR_MAP[rank]
  }
  return 'black'
}

export const convertRankingProducts = (
  products: ProductAPI[]
): ConvertedRankingProduct[] => {
  return products.map((product, index) => {
    const rank = index + 1
    return {
      ...product,
      rankingInfo: {
        ranking: rank,
        backgroundColor: getRankColor(rank),
        textColor: 'white',
      },
    }
  })
}
