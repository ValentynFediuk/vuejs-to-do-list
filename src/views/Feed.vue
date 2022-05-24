<template class="feed">

  <ToDoInput
      @create="createToDo"/>
  <ToDoList
      :todos="todos"
      @remove="removeToDo"
      @edit="editTodo"
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
      if (todo.text.trim().length === 0) {
        this.todos = this.todos.filter(t => t.id !== todo.id)
        return
      }
      todo.text = todo.text.trim()
      this.todos.push(todo)
      localStorage.setItem("localTodos", JSON.stringify(this.todos))
    },
    removeToDo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id)
      localStorage.setItem("localTodos", JSON.stringify(this.todos))
    },
    editTodo(todo) {
      if (todo.text.trim().length === 0) {
        this.todos = this.todos.filter(t => t.id !== todo.id)
        localStorage.setItem("localTodos", JSON.stringify(this.todos))
        return
      }
      todo.text = todo.text.trim()
      localStorage.setItem("localTodos", JSON.stringify(this.todos))
    }
  }
}
</script>

<style>
.feed {
  margin-top: 20px;
}
</style>