import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@pedrohlucena/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
