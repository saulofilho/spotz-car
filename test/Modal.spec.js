import { mount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

describe('Modal', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Modal)
    expect(wrapper.element).toBeTruthy()
  })
})
