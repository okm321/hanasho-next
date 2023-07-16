export type Styles = {
  page: string
  pagination: string
  topicList: string
  topicList__card: string
  topicSection: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
