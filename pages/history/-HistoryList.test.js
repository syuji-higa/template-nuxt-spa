import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HistoryList from './-HistoryList.vue'

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

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be display "histories" value', () => {
    const $item = wrapper.findAll('.item')
    const { histories } = store.state
    for (let i = 0; i < histories.length; i++) {
      expect($item.at(i).text()).toBe(histories[i])
    }
  })
})
