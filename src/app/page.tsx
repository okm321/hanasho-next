import { Suspense } from 'react'
import { SeasonableProductList } from './components/SeasonProductList'
import { TopArticle } from './components/TopArticle'
import { TaxonList } from './components/TaxonList'
import { RankingProductList } from './components/RankingProductList'
import { PageMap } from '@/components/PageMap'

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TopArticle />
      </Suspense>
      <Suspense fallback={<div>Loading2...</div>}>
        <SeasonableProductList />
      </Suspense>
      <Suspense fallback={<div>Loading3...</div>}>
        <RankingProductList />
      </Suspense>
      <Suspense fallback={<div>Loading4...</div>}>
        <TaxonList />
      </Suspense>
      <Suspense fallback={<div>Loading5...</div>}>
        <PageMap />
      </Suspense>
    </div>
  )
}
