import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@pedrohlucena/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/pedrohlucena.png',
    alt: 'Pedro Lucena',
  },
  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
