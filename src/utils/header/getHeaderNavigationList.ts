import { HeaderNavigationItem } from '@/types'

const createNavigationItem = (item: HeaderNavigationItem) => item

export const getHeaderNavigationList = (): HeaderNavigationItem[] => {
  const items: HeaderNavigationItem[] = []

  items.push(
    createNavigationItem({
      id: 1,
      icon: '/images/nav/top.png',
      label: 'トップ',
      link: '/',
    }),
    createNavigationItem({
      id: 2,
      icon: '/images/nav/service.png',
      label: 'サービス一覧',
      link: '/services',
    }),
    createNavigationItem({
      id: 3,
      icon: '/images/nav/about.png',
      label: '花将について',
      link: '/about',
    }),
    createNavigationItem({
      id: 4,
      icon: '/images/nav/contact.png',
      label: 'お問い合わせ',
      link: '/contact',
    }),
    createNavigationItem({
      id: 5,
      icon: '/images/nav/guide.png',
      label: 'ご利用案内',
      link: '/faq',
    }),
    createNavigationItem({
      id: 6,
      icon: '/images/nav/subscription.png',
      label: '定期便',
      link: '/search/topic/59',
    }),
    createNavigationItem({
      id: 7,
      icon: '/images/nav/celebration_event.png',
      label: 'おまとめ窓口',
      link: '/search/topic/64',
    })
  )

  return items
}
