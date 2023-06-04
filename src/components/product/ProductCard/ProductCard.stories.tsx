import { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './ProductCard'

type Story = StoryObj<typeof ProductCard>

const meta: Meta<typeof ProductCard> = {
  title: 'Product/ProductCard',
  component: ProductCard,
  args: {
    image: '/images/dummy/dummy1.jpeg',
    name: 'パステルカラーのおまかせ花束',
    subtitle: '【正午までのご注文で即日発送】パステルカラーのおまかせ花束',
    price: 3850,
    link: 'https://yahoo.co.jp',
  },
}

export default meta

export const Base: Story = {}
