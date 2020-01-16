import {
  shallowMount
} from '@vue/test-utils'
import Header from '../components/Header.vue'

test('保存Header组件快照', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})

test('输入框值为空的话按enter不能提交。', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('.todo-input')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

test('输入空格不允许提交', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('.todo-input')
  input.setValue('  ')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

test('输入的字符应该小于等于10', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('.todo-input')
  input.setValue('abcdefghj')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
})

test('输入的字符小于等于4', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('.todo-input')
  input.setValue('abc')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

test('输入框值不为空按enter键发射emit事件，且将输入框值置空。', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('.todo-input')
  input.setValue('Ethan')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputVal).toBe('')
})
