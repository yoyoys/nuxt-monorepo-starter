import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Button from './Button.vue';

// const types = ['primary', 'secondary', 'tertiary']
describe('test Button Button', () => {
  expect(Button).toBeTruthy();
  const wrapper = mount(Button, {
    props: {
      disabled: false,
      loading: false,
      prefix: 'first',
      iconMobile: false,
    },
  });
  it('trigger Button click event', async () => {
    await wrapper.get('#firstButtonButton').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('check disabled Button', async () => {
    await wrapper.setProps({ disabled: true });
    const button = await wrapper.get('#firstButtonButton');
    expect(button.classes()).toContain('opacity-20');
    expect(button.element.getAttribute('disabled')).toBe('');
  });

  it('check loading in Button', async () => {
    await wrapper.setProps({ loading: true });
    const button = await wrapper.get('#firstButtonButton');
    expect(button.find('svg').exists()).toBeTruthy();
  });
});
