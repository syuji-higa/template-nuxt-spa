import { shallowMount } from '@vue/test-utils'
import DefaultButton from './DefaultButton.vue'

describe('DefaultButton', () => {
  const wrapper = shallowMount(DefaultButton, {
    slots: {
      default: 'Test Button'
    },
    propsData: {
      isSelected: true
    }
  })

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be display "Test Button" text', () => {
    expect(wrapper.text()).toBe('Test Button')
  })

  it('should be added "is-selected" class', () => {
    expect(wrapper.classes()).toContain('is-selected')
  })
})
