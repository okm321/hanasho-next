'use client'

import { FC } from 'react'
import Styles from './HeaderTop.module.scss'
import Link from 'next/link'
import { HeaderButton } from '@/components/button'

export const HeaderTop: FC = () => {
  return (
    <div className={Styles.headerTop}>
      <Link href="/" className={Styles.headerTop__logo}>
        <h1>
          <img src="/images/common/logo.png" alt="フラワーショップ 花将" />
        </h1>
      </Link>
      <div className={Styles.headerTop__link}>
        <div className={Styles.headerButton}>
          <HeaderButton
            label="カート"
            icon="/images/common/cart.png"
            link="/cart"
          />
        </div>
        <div className={Styles.headerButton}>
          <HeaderButton
            label="ログイン"
            icon="/images/common/login.png"
            link="/login"
          />
        </div>
        <div className={Styles.headerSns}>
          <a
            href="https://www.instagram.com/flower_hanasho"
            target="_blank"
            className={Styles.headerSns__icon}
          >
            <img src="/images/sns/instagram_icon.png" alt="インスタグラム" />
          </a>
          <a
            href="https://www.facebook.com/flowershophanasho"
            target="_blank"
            className={Styles.headerSns__icon}
          >
            <img src="/images/sns/facebook_icon.png" alt="フェイスブック" />
          </a>
          <a
            href="https://page.line.me/198gyxsj?openQrModal=true"
            target="_blank"
            className={Styles.headerSns__icon}
          >
            <img src="/images/sns/line_icon.png" alt="LINE" />
          </a>
        </div>
      </div>
    </div>
  )
}
