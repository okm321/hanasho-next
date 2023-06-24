import { fetchTaxons } from '@/app/api'
import { FindByStyleList } from './FindByStyle'
import { TaxonType } from '@/types'

export async function TaxonList() {
  const taxons = await fetchTaxons()
  return <FindByStyleList taxon={taxons[TaxonType.Style - 1]} />
}
