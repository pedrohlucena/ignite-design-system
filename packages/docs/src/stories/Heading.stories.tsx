import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@pedrohlucena/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
}
