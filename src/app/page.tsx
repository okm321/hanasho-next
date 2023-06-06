import { SeasonableProductList } from './components/SeasonProductList'
import { TopArticle } from './components/TopArticle'

export default async function Home() {
  return (
    <div>
      <TopArticle />
      <SeasonableProductList />
    </div>
  )
}
