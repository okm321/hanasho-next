import { Meta, StoryObj } from '@storybook/react'
import { ImageWithText } from './ImageWithText'

type Story = StoryObj<typeof ImageWithText>

const meta: Meta<typeof ImageWithText> = {
  title: 'CardItem/ImageWithText',
  component: ImageWithText,
  args: {
    image: '/images/dummy/dummy1.jpeg',
    text: '花束',
    id: 1,
    width: 230,
  },
}

export default meta

export const Base: Story = {}
