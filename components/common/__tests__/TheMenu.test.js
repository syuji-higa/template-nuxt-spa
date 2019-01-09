import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheMenu from '~/components/common/TheMenu.vue'

describe('TheMenu', () => {
  const wrapper = shallowMount(TheMenu, {
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
    expect($a.at(0).props().to).toBe('/')
    expect($a.at(1).props().to).toBe('/select')
    expect($a.at(2).props().to).toBe('/dynamic')
  })
})
