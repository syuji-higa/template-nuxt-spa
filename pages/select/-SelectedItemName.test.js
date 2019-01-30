import { shallowMount } from '@vue/test-utils'
import SelectedItemName from './-SelectedItemName.vue'

describe('SelectedItemName', () => {
  const wrapper = shallowMount(SelectedItemName, {
    slots: {
      default: 'Test Name'
    },
    propsData: {
      isSelected: true
    }
  })

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visible as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be shown "Test Name" text', () => {
    expect(wrapper.text()).toBe('Test Name')
  })

  it('should be added "is-selected" class', () => {
    expect(wrapper.find('.item').classes()).toContain('is-selected')
  })
})
