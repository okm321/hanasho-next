import { Meta, StoryObj } from '@storybook/react'
import { TopTitle } from './TopTitle'

type Story = StoryObj<typeof TopTitle>

const meta: Meta<typeof TopTitle> = {
  title: 'Title/TopTitle',
  component: TopTitle,
  args: {
    title: 'タイトル',
  },
}

export default meta

export const Base: Story = {}
