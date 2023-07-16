export type Styles = {
  footer: string
  footerCopywriting: string
  footerInfo: string
  footerInfo__logo: string
  footerInfo__text: string
  footerInfoOpen: string
  footerInfoOpen__data: string
  footerInfoOpen__head: string
  footerInfoSns: string
  footerInfoSns__data: string
  footerInfoSns__head: string
  footerInfoTels: string
  footerInfoTels__num: string
  footerTerms: string
  footerTerms__label: string
  snsIcon: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
