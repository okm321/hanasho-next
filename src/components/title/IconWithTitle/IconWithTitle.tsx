'use client'
import { ComponentPropsWithoutRef, ElementType, FC } from 'react'
import Styles from './IconWithTitle.module.scss'

type Props<T extends ElementType> = {
  /** タグ */
  tag?: T
  /** アイコン */
  icon: string
  /** アイコンサイズ */
  width?: number
  /** ラベル */
  label: string
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

export const IconWithTitle = <T extends ElementType = 'h4'>({
  tag,
  icon,
  label,
  width,
  ...props
}: Props<T>) => {
  const Tag = tag || 'h4'
  return (
    <Tag {...props} className={Styles.title}>
      <div className={Styles.title__icon} style={{ width: width || 30 }}>
        <img src={icon} alt={label} />
      </div>
      <span className={Styles.title__label}>{label}</span>
    </Tag>
  )
}
