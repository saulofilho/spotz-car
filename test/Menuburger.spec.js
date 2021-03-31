import { mount } from '@vue/test-utils'
import Menuburger from '@/components/Menuburger.vue'

describe('Menuburger', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Menuburger)
    expect(wrapper.element).toBeTruthy()
  })
})
