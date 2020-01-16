<template>
  <div class="home">
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/containers/TodoList/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
