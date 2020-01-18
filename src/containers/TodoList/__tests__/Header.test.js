import {
  shallowMount
} from '@vue/test-utils'
import Header from '../components/Header.vue'

describe('Header 组件测试', () => {
  test('保存Header组件快照', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
  test('输入框值为空，按回车键不派发事件。', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  test('输入多个空格，按回车键不派发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('  ')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  test('输入的字符长度大于10，按回车键不派发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('abcdefghjkl')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  test('输入的字符长度等于10，按回车键可以派发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('abcdefghjk')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
  })
  test('输入的字符长度小于4，按回车键不派发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('abc')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  test('输入的字符长度等于4，按回车键可以派发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('abcd')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
  })
  test('输入字符串包含/，按回车键不派发事件。', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('ab/cd')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  test('输入满足条件的字符串，按回车键派发事件且将输入框值置空。', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('.todo-input')
    input.setValue('Ethan')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputVal).toBe('')
  })
})
