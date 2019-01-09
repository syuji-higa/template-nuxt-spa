import { shallowMount } from '@vue/test-utils'
import SelectedItemName from '~/pages/select/-SelectedItemName.vue'

describe('SelectedItemName', () => {
  const wrapper = shallowMount(SelectedItemName, {
    slots: {
      default: 'Test Name'
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
    expect(wrapper.text()).toBe('Test Name')
  })
  it('selected class', () => {
    expect(wrapper.find('.item').classes()).toContain('is-selected')
  })
})
