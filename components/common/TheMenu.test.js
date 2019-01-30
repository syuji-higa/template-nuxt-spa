import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheMenu from './TheMenu.vue'

describe('TheMenu', () => {
  const wrapper = shallowMount(TheMenu, {
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
})
