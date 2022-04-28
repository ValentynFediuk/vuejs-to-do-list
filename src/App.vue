<template>
  <ToDoInput
    @create="createToDo"/>
  <ToDoList
    :todos="todos"
  />
</template>

<script>
import ToDoInput from "@/components/ToDoInput";
import ToDoList from "@/components/ToDoList";

export default {
  components: {
    ToDoInput,
    ToDoList
  },
  data() {
    return {
      todos: [
        {id: 1, text: 'Test'}
      ]
    }
  },
  methods: {
    createToDo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<style>

</style>

<!--https://stackoverflow.com/questions/65316893/vue-pagination-array-of-objects-->