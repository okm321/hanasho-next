import { customFetch } from '@/api/fetch/customFetch'
import { parseRequest } from '@/api/fetch/parseRequest'
import { RankingProductAPIRaw } from '@/types'
import { ConvertedRankingProduct } from '@/types/product/rankingProduct'
import { convertRankingProducts } from '../utils/rankingProduct/convertRankingProducts'

/**
 * 人気商品を取得する
 */
export const fetchRankingProducts = () => {
  return parseRequest(
    customFetch<RankingProductAPIRaw>('/api/product_rankings'),
    (data): ConvertedRankingProduct[] => {
      return convertRankingProducts(data.product_rankings)
    }
  )
}
