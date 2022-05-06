<template class="feed">

    <ToDoInput
        @create="createToDo"/>
    <ToDoList
        :todos="todos"
        @remove="removeToDo"
    />

</template>

<script>
import ToDoInput from "@/components/ToDoInput";
import ToDoList from "@/components/ToDoList";


export default {
  name: "fe-ed",
  components: {
    ToDoInput,
    ToDoList,
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
    },
    removeToDo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id)
    }
  },
}
</script>

<style>
  .feed {
    margin-top: 20px;
  }
</style>

<!--https://stackoverflow.com/questions/65316893/vue-pagination-array-of-objects-->