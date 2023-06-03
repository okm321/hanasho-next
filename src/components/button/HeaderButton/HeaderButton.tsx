import { FC, ReactNode } from 'react'
import Style from './HeaderButton.module.scss'

// type HeaderButtonProps = {
//   /** ラベル */
//   label: string
//   /** アイコン */
//   icon?: ReactNode
//   /** リンク先 */
//   link?: string
//   /** 色反転 */
//   colorReverse?: boolean
// }

export const HeaderButtonInner: FC = () => {
  return <div className={Style.buttonItem__text}>トップ</div>
}

// export const HeaderButtonWrapper: FC<HeaderButtonProps> = ({
//   link
// }) => {
//   if (link != null) return <div>{HeaderButtonInner()}</div>
// }
