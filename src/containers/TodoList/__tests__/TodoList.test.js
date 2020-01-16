import {
  shallowMount
} from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import UndoList from '../components/UndoList.vue'

test('undoList初始化应为空', () => {
  const wrapper = shallowMount(TodoList)
  expect(wrapper.vm.undoList).toEqual([])
})

test('TodoList 调用 addUndoList undoList会增加加内容', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.addUndoList(4)
  expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
})

test('TodoList调用Undolist 需要传参lists', () => {
  const wrapper = shallowMount(TodoList)
  const undolist = wrapper.find(UndoList)
  expect(undolist.props('lists')).toBeTruthy()
})

test('TodoList 中 deleteUndoItem方法调用时undoList内容会少一个', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.deleteUndoItem(1)
  expect(wrapper.vm.$data.undoList).toEqual([1, 3])
})
