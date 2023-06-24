import { Meta, StoryObj } from '@storybook/react'
import { IconWithText } from './IconWithText'

type Story = StoryObj<typeof IconWithText>

const meta: Meta<typeof IconWithText> = {
  title: 'CardItem/IconWithText',
  component: IconWithText,
  args: {
    icon: '/images/dummy/dummy1.jpeg',
    text: '花束',
    id: 1,
    width: 230,
  },
}

export default meta

export const Base: Story = {}
