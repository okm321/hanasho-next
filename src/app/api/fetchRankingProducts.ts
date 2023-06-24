import { customFetch } from '@/api/fetch/customFetch'
import { parseRequest } from '@/api/fetch/parseRequest'
import { RankingProductAPIRaw, ProductAPI } from '@/types'

/**
 * 人気商品を取得する
 */
export const fetchRankingProducts = () => {
  return parseRequest(
    customFetch<RankingProductAPIRaw>('/api/product_rankings'),
    (data): ProductAPI[] => {
      return data.product_rankings
    }
  )
}
