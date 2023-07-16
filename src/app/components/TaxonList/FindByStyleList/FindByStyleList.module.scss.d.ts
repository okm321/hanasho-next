export type Styles = {
  styleList: string
  styleList__item: string
  styleSection: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
