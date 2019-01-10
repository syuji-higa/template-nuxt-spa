import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HistoryList from '~/pages/history/-HistoryList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HistoryList', () => {
  let store
  let wrapper
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        histories: ['/', '/select', '/dynamic/charli']
      }
    })
    wrapper = shallowMount(HistoryList, { store, localVue })
  })
  it('render component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('visible component', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
  it('items', () => {
    const $item = wrapper.findAll('.item')
    const { histories } = store.state
    for (let i = 0; i < histories.length; i++) {
      expect($item.at(i).text()).toBe(histories[i])
    }
  })
})
