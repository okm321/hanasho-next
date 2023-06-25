import type { Meta, StoryObj } from '@storybook/react'

import { IconWithTitle } from './IconWithTitle'

type Story = StoryObj<typeof IconWithTitle>

const meta: Meta<typeof IconWithTitle> = {
  title: 'Title/IconWithTitle',
  component: IconWithTitle,
  args: {
    icon: '/images/common/decoration1.png',
    label: 'おまかせ',
  },
}

export default meta

export const Base: Story = {}
