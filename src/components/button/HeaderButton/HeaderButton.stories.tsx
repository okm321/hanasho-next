import { Meta, StoryObj } from '@storybook/react'

import { HeaderButtonInner } from './HeaderButton'

type Story = StoryObj<typeof HeaderButtonInner>

const meta: Meta<typeof HeaderButtonInner> = {
  title: 'Button/HeaderButton',
  component: HeaderButtonInner,
}

export default meta

export const Base: Story = {}
