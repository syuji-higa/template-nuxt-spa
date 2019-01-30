import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import DynamicList from './-DynamicList.vue'

describe('DynamicList', () => {
  const wrapper = shallowMount(DynamicList, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visible as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be shown "items" text at "anchor"', () => {
    const anchor = wrapper.findAll('a')
    const items = wrapper.vm.items
    for (let i = 0; i < items.length; i++) {
      expect(anchor.at(i).text()).toBe(items[i].id)
    }
  })
})
