import type { Meta, StoryObj } from '@storybook/react'

import { PageMap } from './PageMap'

type Story = StoryObj<typeof PageMap>

const meta: Meta<typeof PageMap> = {
  title: 'PageMap/PageMap',
  component: PageMap,
}

export default meta

export const Base: Story = {
  args: {},
}
