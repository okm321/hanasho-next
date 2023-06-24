import { customFetch } from '@/api/fetch/customFetch'
import { parseRequest } from '@/api/fetch/parseRequest'
import { SeasonableProductAPIRaw, ProductAPI } from '@/types'

/**
 * 旬の商品を取得する
 */
export const fetchSeasonProducts = () => {
  return parseRequest<SeasonableProductAPIRaw, ProductAPI[]>(
    customFetch('/api/product_seasonables'),
    (data) => {
      return data.product_seasonables
    }
  )
}
