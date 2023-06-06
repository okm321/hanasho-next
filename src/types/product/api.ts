/** 旬の商品 */
export type SeasonableProductAPI = {
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

export type SeasonableProductAPIRaw = {
  product_seasonables: SeasonableProductAPI[]
}
