import {
  shallowMount
} from '@vue/test-utils'
import UndoList from '../components/UndoList.vue'

test('初始化待办事项数量为0，列表无内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { lists: [] }
  })
  expect(+wrapper.find('.undo-count').text()).toEqual(0)
  expect(wrapper.findAll('.undo-list').length).toEqual(0)
})

test('待办事项数量与lists数量相同', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      lists: [1, 2, 3]
    }
  })
  expect(+wrapper.find('.undo-count').text()).toEqual(3)
  expect(wrapper.findAll('.undo-list').length).toEqual(3)
})

test('删除一个待办事项lists数量减一', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      lists: [1, 2, 3]
    }
  })
  wrapper.findAll('.undo-delete').at(1).trigger('click')
  expect(wrapper.emitted().delete).toBeTruthy()
})
