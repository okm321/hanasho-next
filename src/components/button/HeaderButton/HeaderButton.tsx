import { FC, ReactNode } from 'react'
import Styles from './HeaderButton.module.scss'
import Link from 'next/link'

type HeaderButtonInnerProps = {
  /** ラベル */
  label: string
  /** アイコン */
  icon?: string
  /** アイコンに数を付与 */
  count?: number
}

type HeaderButtonProps = HeaderButtonInnerProps & {
  /** リンク先 */
  link?: string
  /** 色反転 */
  colorReverse?: boolean
}

export const HeaderButtonInner: FC<HeaderButtonInnerProps> = ({
  label,
  icon,
  count,
}) => {
  return (
    <>
      <div className={Styles.buttonItem__img}>
        <img src={icon} className={Styles.icon} alt={label} />
        {count && <div className={Styles.count}>{count}</div>}
      </div>
      <div className={Styles.buttonItem__text}>{label}</div>
    </>
  )
}

export const HeaderButton: FC<HeaderButtonProps> = ({
  label,
  icon,
  link,
  colorReverse,
  count,
}) => {
  if (link == null)
    return (
      <button
        className={`${Styles.buttonItem} ${
          colorReverse ? Styles.buttonItemReverse : ''
        }`}
      >
        <HeaderButtonInner label={label} icon={icon} count={count} />
      </button>
    )
  return (
    <Link
      href={link}
      className={`${Styles.buttonItem} ${
        colorReverse ? Styles.buttonItemReverse : ''
      }`}
    >
      <HeaderButtonInner label={label} icon={icon} count={count} />
    </Link>
  )
}
