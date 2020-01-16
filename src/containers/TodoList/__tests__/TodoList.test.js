import {
  shallowMount
} from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import UndoList from '../components/UndoList.vue'

describe('TodoList 组件测试', () => {
  test('undoList初始化为空', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.vm.undoList).toEqual([])
  })

  test('调用 addUndoList后 undoList会增加内容', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.addUndoList(4)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
  })

  test('使用UndoList组件时需要传参lists', () => {
    const wrapper = shallowMount(TodoList)
    const undolist = wrapper.find(UndoList)
    expect(undolist.props('lists')).toBeTruthy()
  })

  test('执行deleteUndoItem方法时 undoList 会减少一个元素', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.deleteUndoItem(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })
})
