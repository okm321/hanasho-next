import { expectType } from 'tsd'
import { omitNullableHandler } from './omitNullableHandler'

describe('omitNullableHandler', () => {
  const items = ['A', 'B', 'C', null, undefined] as const
  it(`omitNullable to ${items.map((item) => `${item}`)}`, () => {
    const omittedNullableItems = items.filter(omitNullableHandler)

    expectType<Array<'A' | 'B' | 'C'>>(omittedNullableItems)
    expect(omittedNullableItems).toMatchSnapshot()
  })
})
