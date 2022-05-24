<template>
  <ul>
    <ToDoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="$emit('remove', todo)"
        @edited="$emit('edit', todo)"
    />
  </ul>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";

export default {
  components: {ToDoItem},
  props: {
    todos: {
      type: Array,
      required: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 0 auto;
  width: 500px;
  padding-left: 0;
}
</style>

