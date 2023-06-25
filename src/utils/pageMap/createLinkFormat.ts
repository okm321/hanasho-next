import { PageMapCategory } from '@/types'
import { checkNeverType } from '../common'

/**
 * ページマップのリンクを作成する
 * @param category - ページマップのカテゴリ
 * @param id - ページマップのID
 */
export const createLinkFormat = (category: PageMapCategory, id: number) => {
  switch (category) {
    case PageMapCategory.Use:
      return `/search/${id}?type=use`
    case PageMapCategory.Style:
      return `/search/${id}?type=style`
    case PageMapCategory.Topic:
      return `/search/topic/${id}`
    case PageMapCategory.Menu:
      return '/'
  }
  checkNeverType(category)
}
