'use client'

import { FC } from 'react'
import Styles from './HeaderNavigation.module.scss'
import Link from 'next/link'
import { getHeaderNavigationList } from '@/utils/header'

export const HeaderNavigation: FC = () => {
  const navigationList = getHeaderNavigationList()
  return (
    <nav className={Styles.nav}>
      {navigationList.map((nav) => {
        return (
          <Link href={nav.link} className={Styles.navItem} key={nav.id}>
            <div className={Styles.navItem__icon}>
              <img src={nav.icon} alt="" />
            </div>
            <div className={Styles.navItem__label}>{nav.label}</div>
          </Link>
        )
      })}
    </nav>
  )
}
