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
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }]
    })
    wrapper.vm.addUndoList(4)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'div' },
      { value: 3, status: 'div' },
      { value: 4, status: 'div' }])
  })

  test('使用UndoList组件时需要传参lists', () => {
    const wrapper = shallowMount(TodoList)
    const undolist = wrapper.find(UndoList)
    expect(undolist.props('lists')).toBeTruthy()
  })

  test('执行deleteUndoItem方法时 undoList 会减少一个元素', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.deleteUndoItem(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 3, status: 'div' }
    ])
  })

  test('执行 changeItemStatus 方法，undoList 会变更一个元素状态', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.changeItemStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'input' },
      { value: 3, status: 'div' }
    ])
  })

  test('执行 resetUndoItem 方法，undoList 会复原', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'input' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.resetUndoItem()
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'div' },
      { value: 3, status: 'div' }
    ])
  })

  test('执行 saveItem 方法，undoList 会更新元素最新值，且状态变更为div', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'input' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.saveItem({
      val: 222,
      index: 1
    })
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 222, status: 'input' },
      { value: 3, status: 'div' }
    ])
  })
})
