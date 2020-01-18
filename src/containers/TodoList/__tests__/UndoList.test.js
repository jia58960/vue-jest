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
        lists: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })
    expect(+wrapper.find('.undo-count').text()).toEqual(3)
    expect(wrapper.findAll('.undo-list').length).toEqual(3)
  })

  test('删除按钮点击时,向外派发 delete 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })
    wrapper.findAll('.undo-delete').at(1).trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })

  test('点击列表时,向外派发 change 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })
    wrapper.findAll('.undo-list').at(1).trigger('click')
    expect(wrapper.emitted().change).toBeTruthy()
  })

  test('三个事项，其中一个正在编辑时，列表显示1个输入框两个列表项', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    expect(wrapper.find('.undo-input').element.value).toBe('2')
    expect(wrapper.find('.undo-input')).toBeTruthy()
  })

  test('input 失去焦点时,向外派发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    wrapper.find('.undo-input').trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
    // expect(wrapper.findAll('.undo-input').length).toBe(1)
  })

  test('input cahnge时,向外派发 save 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        lists: [
          { value: 1, status: 'div' },
          { value: 123, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    wrapper.find('.undo-input').trigger('change')
    expect(wrapper.emitted().save).toBeTruthy()
    expect(wrapper.emitted().save[0][0]).toEqual({
      val: '123',
      index: 1
    })
  })
})
