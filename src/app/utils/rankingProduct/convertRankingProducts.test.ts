import { ProductAPI } from '@/types'
import { convertRankingProducts } from './convertRankingProducts'
import { times } from 'lodash-es'

const createRankingProduct = (num: number): ProductAPI[] => {
  return times(num, (index) => {
    return {
      id: index + 1,
      list_image: `https://example.com/image${index + 1}.jpg`,
      name: `商品${index + 1}`,
      subtitle: `サブタイトル${index + 1}`,
      price: (index + 1) * 1000,
    }
  })
}

describe('convertRankingProducts', () => {
  it('人気ランキングのデータが3個以内の場合', () => {
    expect(convertRankingProducts(createRankingProduct(2))).toMatchSnapshot()
  })
  it('人気ランキングのデータが3個以上の場合', () => {
    expect(convertRankingProducts(createRankingProduct(10))).toMatchSnapshot()
  })
})
