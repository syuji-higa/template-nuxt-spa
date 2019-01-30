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

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visibled as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be shown "Test Button" text', () => {
    expect(wrapper.text()).toBe('Test Button')
  })

  it('should be added "is-selected" class', () => {
    expect(wrapper.classes()).toContain('is-selected')
  })

  it('should be the emitted as "click" event when clicked', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click.length).toBe(1)
  })
})
