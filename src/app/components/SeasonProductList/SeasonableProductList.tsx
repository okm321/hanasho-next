import { fetchSeasonProducts } from '@/app/api/fetchSeasonProducts'
import { SeasonableProductListInner } from './SeasonableProductListInner'

export async function SeasonableProductList() {
  const seasonableProducts = await fetchSeasonProducts()
  return <SeasonableProductListInner seasonableProducts={seasonableProducts} />
}
