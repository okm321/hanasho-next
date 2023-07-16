'use client'

import Link from 'next/link'
import Styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerInfo}>
        <Link href="/" className={Styles.footerInfo__logo}>
          <img src="/images/common/logo.png" alt="" />
        </Link>
        <div className={Styles.footerInfo__text}>
          <p>〒733-0031 広島市西区観音町 9-8( 天満町電停から徒歩1分 )</p>
          <div className={Styles.footerInfoTels}>
            <a href="tel:082-295-8217" className={Styles.footerInfoTels__num}>
              TEL1 082-295-8217
            </a>
            <a href="tel:082-295-5005" className={Styles.footerInfoTels__num}>
              TEL2 082-295-5005
            </a>
            <span className={Styles.footerInfoTels__num}>FAX 082-295-8217</span>
          </div>
          <p>(事前予約等、お気軽にお問い合わせください)</p>
          <div className={Styles.footerInfoOpen}>
            <div className={Styles.footerInfoOpen__head}>OPEN</div>
            <div className={Styles.footerInfoOpen__data}>
              月〜土　9:00 〜 19:00
              <br />
              日祝　　9:00 〜 15:00
            </div>
          </div>
          <a href="mailto:service@flower-hanasho.com">
            MAIL service@flower-hanasho.com
          </a>
          <div className={Styles.footerInfoSns}>
            <div className={Styles.footerInfoSns__head}>SNS</div>
            <div className={Styles.footerInfoSns__data}>
              <a
                href="https://www.instagram.com/flower_hanasho"
                target="_blank"
                className={Styles.snsIcon}
              >
                <img
                  src="/images/sns/instagram_icon.png"
                  alt="インスタグラム"
                />
              </a>
              <a
                href="https://www.facebook.com/flowershophanasho"
                target="_blank"
                className={Styles.snsIcon}
              >
                <img src="/images/sns/facebook_icon.png" alt="フェイスブック" />
              </a>
              <a
                href="https://page.line.me/198gyxsj?openQrModal=true"
                target="_blank"
                className={Styles.snsIcon}
              >
                <img src="/images/sns/line_icon.png" alt="LINE" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.footerTerms}>
        <Link href="/terms/use" className={Styles.footerTerms__label}>
          利用規約
        </Link>
        <Link
          href="/terms/privacy_policy"
          className={Styles.footerTerms__label}
        >
          個人情報に関する方針
        </Link>
        <Link href="/terms/law" className={Styles.footerTerms__label}>
          特定商法に基づく表記
        </Link>
      </div>
      <div className={Styles.footerCopywriting}>&copy;2021 株式会社花将</div>
    </footer>
  )
}
