import { mount } from '@vue/test-utils'
import Buscar from '@/components/Buscar.vue'

describe('Buscar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Buscar)
    expect(wrapper.element).toBeTruthy()
  })
})

// describe('NewsletterConfirm', () => {
//   const axiosGetMock = jest.fn()
//   const axiosPostMock = jest.fn()
//   const getInitialised = async function (thumbprint) {
//     if (thumbprint === undefined) throw new Error('thumbprint not provided')

//     const NewsletterConfirm = require('./_thumbprint').default
//     if (!NewsletterConfirm.asyncData) {
//       return shallowMount(NewsletterConfirm)
//     }

//     let originalData = {}
//     if (NewsletterConfirm.data != null) {
//       originalData = NewsletterConfirm.data()
//     }
//     const asyncData = await NewsletterConfirm.asyncData({
//       params: {
//         thumbprint,
//       },
//       error: jest.fn(),
//       $axios: {
//         get: axiosGetMock,
//         post: axiosPostMock,
//       },
//     })
//     NewsletterConfirm.data = function () {
//       return {
//         ...originalData,
//         ...asyncData,
//       }
//     }

//     return shallowMount(NewsletterConfirm)
//   }
//   it('calls axios', async () => {
//     const result = await getInitialised('thumbprint')
//     expect(axiosGetMock).toHaveBeenCalledTimes(1)

//     return result
//   })
// })
