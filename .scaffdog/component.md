---
name: 'component'
root: '.'
output:
  - './src'
questions:
  output_path: 'Please enter an output directory.'
  category: 'Please enter a category name. (features name)'
  name: 'Please enter a component name.'
  story:
    confirm: 'Do you need a story?'
    initial: true
  test:
    confirm: 'Do you need a test?'
    initial: true
---

# `{{ inputs.output_path }}/{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}'

```

# `{{ inputs.output_path }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { FC } from 'react'

type Props = {
  any: any
}

export const {{ inputs.name | pascal }}: FC<Props> = () => {
  return <div></div>
}

```

# `{{ !inputs.story && '!' }}{{ inputs.output_path }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

type Story = StoryObj<typeof {{ inputs.name | pascal }}>

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: '{{ inputs.category | pascal }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
}

export default meta

export const Base: Story = {
  args: {},
}

```

# `{{ !inputs.test && '!' }}{{ inputs.output_path }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './{{ inputs.name | pascal }}.stories'

const { Base } = composeStories(stories)

describe('{{ inputs.name | pascal }}', () => {
  test('Base', () => {
    render(<Base />)
    expect(screen).toBeTruthy()
  })
})

```
