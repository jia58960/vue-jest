<template>
  <div>
    <Header @add="addUndoList"/>
    <UndoList :lists="undoList"
    @delete="deleteUndoItem"
    @change="changeItemStatus"
    @reset="resetUndoItem"
    @save="saveItem"
    />
  </div>
</template>

<script>
import axios from 'axios'
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
  mounted () {
    setTimeout(() => {
      axios.get('/undolist.json').then((res) => {
        this.undoList = res.data
      }).catch(e => console.log(e))
    }, 5000)
  },
  methods: {
    addUndoList (item) {
      if (!this.undoList.some(todo => item === todo.value)) {
        this.undoList.push({
          value: item,
          status: 'div'
        })
      } else {
        console.log('事项已存在！')
      }
    },
    deleteUndoItem (i) {
      this.undoList.splice(i, 1)
    },
    changeItemStatus (i) {
      for (let item of this.undoList) {
        item.status = 'div'
      }
      this.undoList[i].status = 'input'
    },
    resetUndoItem () {
      for (let item of this.undoList) {
        item.status = 'div'
      }
    },
    saveItem (obj) {
      this.undoList[obj.index].value = obj.val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>>
