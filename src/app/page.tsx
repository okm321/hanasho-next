import { SeasonProductList } from '@/components/pages'
import { ProductAPI } from '@/types/product/api'

export default function Home() {
  const products: ProductAPI[] = [
    {
      id: 1,
      image: '/images/dummy/dummy1.jpeg',
      name: 'パステルカラーのおまかせ花束',
      subtitle: '【正午までのご注文で即日発送】パステルカラーのおまかせ花束',
      price: 3850,
    },
    {
      id: 2,
      image: '/images/dummy/dummy1.jpeg',
      name: 'パステルカラーのおまかせ花束',
      subtitle: '【正午までのご注文で即日発送】パステルカラーのおまかせ花束',
      price: 3850,
    },
    {
      id: 3,
      image: '/images/dummy/dummy1.jpeg',
      name: 'パステルカラーのおまかせ花束',
      subtitle: '【正午までのご注文で即日発送】パステルカラーのおまかせ花束',
      price: 3850,
    },
  ]

  return (
    <div>
      <SeasonProductList products={products} />
    </div>
  )
}
