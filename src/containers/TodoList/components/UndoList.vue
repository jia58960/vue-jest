<template>
  <div class="undolist">
    <p class="title">
      正在进行
      <span class="undo-count">{{ lists.length }}</span></p>

    <ul v-if="lists.length" class="undolist-wrapper">
      <li class="undo-list"
        v-for="(item, index) in lists"
        @click="emitChangeEvt(index)"
        :key="item.value">
        <input v-if="item.status === 'input'" type="text"
        class="undo-input"
        @blur="emitBlurEvt(index)"
        @change="emitSaveEvt($event, index)"
        :value="item.value">
        <span v-else>{{ item.value }}</span>
        <b class="undo-delete" @click.stop="emitDeleteEvt(index)">-</b></li>
    </ul>
    <p class="no-data" v-else>暂无数据！</p>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['lists'],
  methods: {
    emitDeleteEvt (index) {
      this.$emit('delete', index)
    },
    emitChangeEvt (index) {
      this.$emit('change', index)
    },
    emitBlurEvt (index) {
      this.$emit('reset')
    },
    emitSaveEvt (evt, index) {
      this.$emit('save', {
        val: evt.target.value,
        index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.undolist {
  width: 600px;
  margin: 0 auto;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .undo-count, .undo-delete {
    display: block;
    float: right;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #cccccc;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    margin-top: 5px;
    border-radius: 50%;
  }
  .undolist-wrapper {
    list-style-type: none;
    li {
      border-radius: 3px;
      border-left: 5px solid #629A9C;
      text-indent: 10px;
      margin-top: 10px;
      height: 40px;
      line-height: 40px;
      background-color: #ffffff;
      .undo-delete {
        margin-top: 10px;
        text-indent: 0;
        margin-right: 10px;
      }
    }
  }
}
</style>
