import { Meta, StoryObj } from '@storybook/react'
import { StyleCard } from './StyleCard'

type Story = StoryObj<typeof StyleCard>

const meta: Meta<typeof StyleCard> = {
  title: 'StyleCard/StyleCard',
  component: StyleCard,
  args: {
    image: '/images/dummy/dummy1.jpeg',
    name: '花束',
    id: 1,
    width: 230,
  },
}

export default meta

export const Base: Story = {}
