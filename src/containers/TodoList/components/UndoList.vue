<template>
  <div>
    <p class="undo-count">{{ lists.length }}</p>
    <ul>
      <li class="undo-list" v-for="(item, index) in lists" :key="item">{{ item }}
        <b class="undo-delete" @click="emitDeleteEvt(index)">删</b></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  data () {
    return {

    }
  },
  props: ['lists'],
  methods: {
    emitDeleteEvt (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
