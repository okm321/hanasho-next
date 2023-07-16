'use client'

import { FC } from 'react'
import { HeaderTop } from './subComponents/HeaderTop'
import { HeaderNavigation } from './subComponents/HeaderNavigation'
import Styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={Styles.header}>
      <HeaderTop />
      <HeaderNavigation />
    </header>
  )
}
