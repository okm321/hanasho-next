import { Meta, StoryObj } from '@storybook/react'

import { HeaderButton } from './HeaderButton'

type Story = StoryObj<typeof HeaderButton>

const meta: Meta<typeof HeaderButton> = {
  title: 'Button/HeaderButton',
  component: HeaderButton,
  args: {
    label: 'カート',
    icon: '/images/common/cart.png',
  },
}

export default meta

export const Base: Story = {}

export const Linkable: Story = {}
Linkable.args = {
  link: 'https://yahoo.co.jp',
}

export const ReverseColor: Story = {}
ReverseColor.args = {
  colorReverse: true,
}

export const Count: Story = {}
Count.args = {
  count: 5,
}
