import { shallowMount } from '@vue/test-utils'
import SelectItems from '~/pages/select/-SelectItems.vue'

describe('SelectItems', () => {
  const wrapper = shallowMount(SelectItems)
  it('render component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('visible component', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
  it('selectedItemName value', () => {
    wrapper.vm.selectItem('Test Name')
    expect(wrapper.vm.selectedItemName).toBe('Test Name')
  })
})
