<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button>X</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
