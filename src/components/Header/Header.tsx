'use client'

import { FC } from 'react'
import { HeaderTop } from './subComponents/HeaderTop'
import { HeaderNavigation } from './subComponents/HeaderNavigation'
import Style from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={Style.header}>
      <HeaderTop />
      <HeaderNavigation />
    </header>
  )
}
