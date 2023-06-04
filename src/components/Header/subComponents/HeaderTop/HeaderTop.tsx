'use client'

import { FC } from 'react'
import Style from './HeaderTop.module.scss'
import Link from 'next/link'
import { HeaderButton } from '@/components/button'

export const HeaderTop: FC = () => {
  return (
    <div className={Style.headerTop}>
      <Link href="/" className={Style.headerTop__logo}>
        <h1 className={Style.logoImage}>
          <img src="/images/common/logo.png" alt="フラワーショップ 花将" />
        </h1>
      </Link>
      <div className={Style.headerTop__link}>
        <div className={Style.headerButton}>
          <HeaderButton
            label="カート"
            icon="/images/common/cart.png"
            link="/cart"
          />
        </div>
        <div className={Style.headerButton}>
          <HeaderButton
            label="ログイン"
            icon="/images/common/login.png"
            link="/login"
          />
        </div>
        <div className={Style.headerSns}>
          <a
            href="https://www.instagram.com/flower_hanasho"
            target="_blank"
            className={Style.headerSns__icon}
          >
            <img src="/images/sns/instagram_icon.png" alt="インスタグラム" />
          </a>
          <a
            href="https://www.facebook.com/flowershophanasho"
            target="_blank"
            className={Style.headerSns__icon}
          >
            <img src="/images/sns/facebook_icon.png" alt="フェイスブック" />
          </a>
          <a
            href="https://page.line.me/198gyxsj?openQrModal=true"
            target="_blank"
            className={Style.headerSns__icon}
          >
            <img src="/images/sns/line_icon.png" alt="LINE" />
          </a>
        </div>
      </div>
    </div>
  )
}
