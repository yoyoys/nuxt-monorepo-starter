import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';
import { fn } from '@storybook/test';

import IconCamera from '../icon/Camera.vue';
import { ButtonIconSizes, ButtonTypes } from './Button.model';
import Button from './Button.vue';

interface StoryArgs {
  haveIcon?: boolean;
  text: string;
}
type PropType = ComponentProps<typeof Button> & StoryArgs;

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    type: 'primary',
    iconSize: ButtonIconSizes.Normal,
    disabled: false,
    loading: false,
    text: 'test',
    haveIcon: true,
    onClick: fn(),
  },
  argTypes: {
    haveIcon: { control: 'boolean' },
    text: { control: 'text' },
    type: {
      options: [
        ButtonTypes.Primary,
        ButtonTypes.Secondary,
        ButtonTypes.Tertiary,
        ButtonTypes.Quaternary,
      ],
      control: { type: 'select' },
    },
    iconSize: {
      options: [ButtonIconSizes.Normal, ButtonIconSizes.Small],
      control: { type: 'select' },
    },
  },
  render: (args: any) => ({
    components: { Button, IconCamera },
    setup() {
      // const click = action('click');
      return { args };
    },
    template: /* html */ `
      <Button v-bind="args" @click="click">
        <template v-if="args.haveIcon" #icon>
          <IconCamera/>
        </template>
        {{ args.text }}
      </Button>
    `,
  }),
} satisfies Meta<PropType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ButtonTypes.Primary,
    prefix: 'Primary',
  },
};
export const Secondary: Story = {
  args: {
    type: ButtonTypes.Secondary,
    prefix: 'Secondary',
  },
};
export const Tertiary: Story = {
  args: {
    type: ButtonTypes.Tertiary,
    prefix: 'Tertiary',
  },
};
export const Quaternary: Story = {
  args: {
    type: ButtonTypes.Quaternary,
    prefix: 'Quaternary',
  },
};
