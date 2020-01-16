import {
  shallowMount
} from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import Header from '../components/Header.vue'

test('undoList初始化应为空', () => {
  const wrapper = shallowMount(TodoList)
  expect(wrapper.vm.undoList).toEqual([])
})

test('监听到add事件并push到undoList', () => {
  const content = 'Ethan'
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header)
  header.vm.$emit('add', content)
  expect(wrapper.vm.$data.undoList).toEqual([content])
})
