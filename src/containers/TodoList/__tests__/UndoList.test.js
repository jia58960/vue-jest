import {
  shallowMount
} from '@vue/test-utils'
import UndoList from '../components/UndoList.vue'
describe('UndoList 组件测试', () => {
  test('list参数为[],count数量为0且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: []
      }
    })
    expect(+wrapper.find('.undo-count').text()).toEqual(0)
    expect(wrapper.findAll('.undo-list').length).toEqual(0)
  })

  test('list 参数为[1,2,3] count值应为3，且列表有内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [1, 2, 3]
      }
    })
    expect(+wrapper.find('.undo-count').text()).toEqual(3)
    expect(wrapper.findAll('.undo-list').length).toEqual(3)
  })

  test('删除按钮点击时,向外派发事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [1, 2, 3]
      }
    })
    wrapper.findAll('.undo-delete').at(1).trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })
})
