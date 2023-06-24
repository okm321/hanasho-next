import { fetchTaxons } from '@/app/api'
import { FindByStyleList } from './FindByStyleList'
import { TaxonType } from '@/types'
import { FindByUseList } from './FindByUseList'
import { FindByTopicList } from './FindByTopicList'

export async function TaxonList() {
  const taxons = await fetchTaxons()
  return (
    <>
      <FindByUseList taxon={taxons[TaxonType.Use - 1]} />
      <FindByStyleList taxon={taxons[TaxonType.Style - 1]} />
      <FindByTopicList taxon={taxons[TaxonType.Topic - 1]} />
    </>
  )
}
