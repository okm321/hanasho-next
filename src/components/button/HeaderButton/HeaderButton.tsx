import { FC, ReactNode } from 'react'
import Style from './HeaderButton.module.scss'
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
      <div className={Style.buttonItem__img}>
        <img src={icon} className={Style.icon} />
        {count && <div className={Style.count}>{count}</div>}
      </div>
      <div className={Style.buttonItem__text}>{label}</div>
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
        className={`${Style.buttonItem} ${
          colorReverse ? Style.buttonItemReverse : ''
        }`}
      >
        <HeaderButtonInner label={label} icon={icon} count={count} />
      </button>
    )
  return (
    <Link
      href={link}
      className={`${Style.buttonItem} ${
        colorReverse ? Style.buttonItemReverse : ''
      }`}
    >
      <HeaderButtonInner label={label} icon={icon} count={count} />
    </Link>
  )
}
