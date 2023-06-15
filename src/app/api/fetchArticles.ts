import { customFetch } from '@/api/fetch/customFetch'
import { parseRequest } from '@/api/fetch/parseRequest'
import { SlideAPI, SlideAPIRaw } from '@/types'

/**
 * トップの記事スライドを取得する
 */
export const fetchArticles = () => {
  return parseRequest(
    customFetch<SlideAPIRaw>('/api/slides'),
    (data): SlideAPI[] => {
      return data.slide
    }
  )
}
