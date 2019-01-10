import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheMenu from './TheMenu.vue'

describe('TheMenu', () => {
  const wrapper = shallowMount(TheMenu, {
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
})
