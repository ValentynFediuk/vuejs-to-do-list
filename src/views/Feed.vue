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
      todos: JSON.parse(localStorage.getItem('localTodos') || '[]')
    }
},
  methods: {
    createToDo(todo) {
      this.todos.push(todo)
      localStorage.setItem("localTodos", JSON.stringify(this.todos))
    },
    removeToDo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id)
    },
  }
}
</script>

<style>
.feed {
  margin-top: 20px;
}
</style>