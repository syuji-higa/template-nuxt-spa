import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import DynamicList from '~/pages/dynamic/-DynamicList.vue'

describe('DynamicList', () => {
  const wrapper = shallowMount(DynamicList, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
  it('render component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('visible component', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
  it('links', () => {
    const $a = wrapper.findAll('a')
    const items = wrapper.vm.items
    for (let i = 0; i < items.length; i++) {
      expect($a.at(i).text()).toBe(items[i].id)
    }
  })
})
