'use client'

import { FC } from 'react'
import Style from './HeaderNavigation.module.scss'
import Link from 'next/link'
import { getHeaderNavigationList } from '@/utils/header'

export const HeaderNavigation: FC = () => {
  const navigationList = getHeaderNavigationList()
  return (
    <nav className={Style.nav}>
      {navigationList.map((nav) => {
        return (
          <Link href={nav.link} className={Style.navItem} key={nav.id}>
            <div className={Style.navItem__icon}>
              <img src={nav.icon} alt="" />
            </div>
            <div className={Style.navItem__label}>{nav.label}</div>
          </Link>
        )
      })}
    </nav>
  )
}
