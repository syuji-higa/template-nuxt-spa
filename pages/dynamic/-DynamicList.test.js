import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import DynamicList from './-DynamicList.vue'

describe('DynamicList', () => {
  const wrapper = shallowMount(DynamicList, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be display "items" value', () => {
    const $a = wrapper.findAll('a')
    const items = wrapper.vm.items
    for (let i = 0; i < items.length; i++) {
      expect($a.at(i).text()).toBe(items[i].id)
    }
  })
})
