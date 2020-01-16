<template>
  <div>
    <Header @add="addUndoList"/>
    <UndoList :lists="undoList" @delete="deleteUndoItem"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import UndoList from './components/UndoList.vue'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoList (item) {
      this.undoList.push(item)
    },
    deleteUndoItem (i) {
      this.undoList.splice(i, 1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>>
