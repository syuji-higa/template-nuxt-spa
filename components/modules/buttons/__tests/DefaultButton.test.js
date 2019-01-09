import { shallowMount } from '@vue/test-utils'
import DefaultButton from '~/components/modules/buttons/DefaultButton.vue'

describe('DefaultButton', () => {
  const wrapper = shallowMount(DefaultButton, {
    slots: {
      default: 'Test Button'
    },
    propsData: {
      isSelected: true
    }
  })
  it('render component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('visible component', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
  it('slot text', () => {
    expect(wrapper.text()).toBe('Test Button')
  })
  it('selected class', () => {
    expect(wrapper.classes()).toContain('is-selected')
  })
})
