export type Styles = {
  cardBlock: string
  cardBlock__price: string
  cardInfo: string
  cardInfo__img: string
  cardInfo__name: string
  cardInfo__ranking: string
  cardInfo__subtitle: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
