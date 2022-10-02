import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../Button'

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args}>Label</Button>

export default {
  title: 'components/Button',
  component: Button
} as ComponentMeta<typeof Button>
