import { shallowMount } from '@vue/test-utils'
import SelectItems from './-SelectItems.vue'

describe('SelectItems', () => {
  const wrapper = shallowMount(SelectItems)

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be same "selectItem" value and "selectedItemName" value', () => {
    wrapper.vm.selectItem('Test Name')
    expect(wrapper.vm.selectedItemName).toBe('Test Name')
  })
})
