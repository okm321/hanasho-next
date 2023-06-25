import { fetchRankingProducts } from '@/app/api'
import Styles from './RankingProductList.module.scss'
import { TopTitle } from '@/components/title'
import { ProductCard } from '@/components/product'

export async function RankingProductList() {
  const rankingProductList = await fetchRankingProducts()
  return (
    <section className={Styles.rankingSection}>
      <TopTitle title="人気商品" />
      <ul className={Styles.rankingList}>
        {rankingProductList.map((product) => {
          return (
            <li key={product.id} className={Styles.rankingList__item}>
              <ProductCard
                image={product.list_image}
                name={product.name}
                subtitle={product.subtitle}
                price={product.price}
                rankingInfo={product.rankingInfo}
                width={208}
                link={`/products/${product.id}`}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
