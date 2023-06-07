import { fetchArticles } from '@/app/api'
import { TopArticleInner } from './TopArticleInner'
import { Suspense } from 'react'

export async function TopArticle() {
  const articles = await fetchArticles()

  return <TopArticleInner slides={articles} />
}
