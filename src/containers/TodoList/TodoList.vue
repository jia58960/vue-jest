<template>
  <div>
    <Header @add="addUndoList"/>
    <ul>
      <li v-for="item of undoList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoList (item) {
      this.undoList.push(item)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>>
