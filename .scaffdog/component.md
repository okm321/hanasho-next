---
name: 'component'
root: 'src'
output:
  - '**/*'
questions:
  category: 'カテゴリー名を入力してください（Storybookで使用します）'
  name: 'コンポーネント名を入れてください'
  story:
    confirm: 'Storybookは必要ですか？'
    initial: true
  scss:
    confirm: 'Scssファイルは要る？'
    initial: true
  test:
    confirm: 'テストは必要ですか？'
    initial: true
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}'

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { FC } from 'react'

type Props = {
  any: any
}

export const {{ inputs.name | pascal }}: FC<Props> = () => {
  return <div></div>
}

```

# `{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

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

# `{{ !inputs.scss && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
@use '@style/global' as g;

```

# `{{ !inputs.test && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

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
