<template>
  <ToDoInput
    @create="createToDo"/>
  <ToDoList
    :todos="todos"
  />
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<script>
// import { ref } from 'vue'
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
      todos.push(todo)
    }
  }
}


// const newTodo = ref('')
// const hideCompleted = ref(false)

// const filteredTodos = computed(() => {
//   return hideCompleted.value
//       ? todos.value.filter((t) => !t.done)
//       : todos.value
// })
//
// function removeTodo(todo) {
//   todos.value = todos.value.filter((t) => t !== todo)
// }
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>