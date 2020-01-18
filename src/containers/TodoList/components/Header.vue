<template>
  <div class="header">
    <div class="header-content">
      TODO：
      <input type="text"
      class="todo-input"
      :value="inputVal"
      @input=" e => changeInputVal(e.target.value)"
      @keyup.enter="addTodoItem"
      placeholder="请输入待办事项">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({
      inputVal: state => state.inputVal
    })
  },
  methods: {
    addTodoItem () {
      const realVal = this.inputVal.trim()
      const len = realVal.length
      if (realVal && len >= 4 && len <= 10 && !/\//.test(realVal)) {
        this.$emit('add', this.inputVal)
        this.changeInputVal('')
      }
    },
    ...mapMutations({
      changeInputVal: 'changeInputVal'
    })
  }
}
</script>

<style lang="scss" scoped>
.header
{
  line-height: 60px;
  height: 60px;
  background-color:#666;
  .header-content
  {
    width: 600px;
    margin: 0 auto;
    color: #FFF;
    .todo-input
    {
      float: right;
      margin-top:16px;
      font-size:16px;
      outline: none;
    }
  }
}
</style>
