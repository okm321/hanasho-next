import { customFetch } from '@/api/fetch/customFetch'
import { parseRequest } from '@/api/fetch/parseRequest'
import { TaxonAPI, TaxonAPIRaw } from '@/types'

/**
 * 分類を取得する
 */
export const fetchTaxons = () => {
  return parseRequest(
    customFetch<TaxonAPIRaw>('/api/taxons'),
    (data): TaxonAPI[] => {
      return data.taxons
    }
  )
}
