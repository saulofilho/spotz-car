import { mount } from '@vue/test-utils'
import Sobre from '@/components/Sobre.vue'

describe('Sobre', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Sobre)
    expect(wrapper.element).toBeTruthy()
  })
})
