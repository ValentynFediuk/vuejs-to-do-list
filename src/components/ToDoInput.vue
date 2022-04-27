<template>
  <form @submit.prevent="createToDo">
    <input v-model="todo.text" />
    <button>Add Todo</button>
  </form>
</template>

<script>

let id = 0

export default {
  data() {
    return {
      todo: {
        text: 'ffff'
      }
    }
  },
  methods: {
    createToDo() {
      this.todo.id = id++
      this.$emit('create', this.todo)
      this.todo = {
        text: 'di'
      }
    }
  }
}

</script>

<style scoped>

</style>