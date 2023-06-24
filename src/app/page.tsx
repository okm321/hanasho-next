import { Suspense } from 'react'
import { SeasonableProductList } from './components/SeasonProductList'
import { TopArticle } from './components/TopArticle'
import { TaxonList } from './components/TaxonList'

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
        <TaxonList />
      </Suspense>
    </div>
  )
}
