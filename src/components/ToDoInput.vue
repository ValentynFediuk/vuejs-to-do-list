<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
</template>

<script>

let id = 0

export default {
  data() {
    return {
      todos: {
        id: id++,
        text: 'Learn HTML',
        done: true
      }
    }
  },
  methods: {
    createToDo() {
      this.id = id++,
      this.$emit('create', this.todo),
      this.todo = {
        text: ''
      }
    }
  }
}

// function addTodo() {
//   todos.value.push({ id: id++, text: newTodo.value, done: false })
//   newTodo.value = ''
// }

</script>

<style scoped>

</style>