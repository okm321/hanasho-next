import { TransitionType } from './common'

export type SlideAPI = {
  /** 識別子 */
  id: number
  /** 画像URL */
  image_url: string
  /** 遷移先 */
  transition: TransitionType
  /** 分類ID */
  taxon_id: number
  /** URL */
  url: string
}

export type SlideAPIRaw = {
  slide: SlideAPI[]
}
