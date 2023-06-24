/** 旬の商品 */
export type ProductAPI = {
  /** 識別子 */
  id: number
  /** 画像 */
  list_image: string
  /** 商品名 */
  name: string
  /** サブタイトル */
  subtitle: string
  /** 価格 */
  price: number
}

/** 旬の商品取得API */
export type SeasonableProductAPIRaw = {
  product_seasonables: ProductAPI[]
}

/** 人気商品取得API */
export type RankingProductAPIRaw = {
  product_rankings: ProductAPI[]
}
