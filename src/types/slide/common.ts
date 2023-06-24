/** 遷移先 */
export const TransitionType = {
  /** 特集 */
  Special: 1,
  /** URL */
  Url: 2,
} as const
export type TransitionType =
  (typeof TransitionType)[keyof typeof TransitionType]
