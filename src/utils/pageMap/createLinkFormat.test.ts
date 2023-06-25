import { PageMapCategory } from '@/types'
import { createLinkFormat } from './createLinkFormat'

describe('createLinkFormat', () => {
  it('用途でさがす場合', () => {
    expect(createLinkFormat(PageMapCategory.Use, 1)).toMatchSnapshot()
  })
  it('スタイルでさがす場合', () => {
    expect(createLinkFormat(PageMapCategory.Style, 1)).toMatchSnapshot()
  })
  it('特集でさがす場合', () => {
    expect(createLinkFormat(PageMapCategory.Topic, 1)).toMatchSnapshot()
  })
  it('メニューの場合', () => {
    expect(createLinkFormat(PageMapCategory.Menu, 1)).toMatchSnapshot()
  })
  it('例外の場合', () => {
    expect(createLinkFormat(9 as PageMapCategory, 1)).toMatchSnapshot()
  })
})
