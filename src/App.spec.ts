import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  test('renders message', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toMatch('Breakout')
  })
})
