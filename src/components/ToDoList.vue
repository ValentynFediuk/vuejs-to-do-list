<template>
  <ul>
    <ToDoItem
        @clicked="onClickChild"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="$emit('remove', todo)"
    />
  </ul>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";

export default {
  components: {ToDoItem},
  data() {
    return {
      newTodos: []
    }
  },
  props: {
    todos: {
      type: Array,
      required: true,
    }
  },
  methods: {
    onClickChild(value) {
      this.newTodos = JSON.parse(JSON.stringify(value))
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

