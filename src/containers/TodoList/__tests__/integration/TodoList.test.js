import {
  mount
} from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import store from '../../../../store/index'
describe('TodoList组件集成测试', () => {
  test('1、 用户在输入框输入内容； 2、 用户按回车键； 3、 内容会显示在未完成列表中 ', () => {
    const wrapper = mount(TodoList, { store })
    const inputElem = wrapper.find('.todo-input')
    inputElem.setValue('Ethan')
    inputElem.trigger('change')
    inputElem.trigger('keyup.enter')
    const todo = wrapper.findAll('.undo-list')
    expect(todo.length).toBe(1)
    expect(todo.at(0).text()).toContain('Ethan')
  })
})
