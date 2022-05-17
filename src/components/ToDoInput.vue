<template>
  <form @submit.prevent="createToDo">
    <input v-model="todo.text" />
    <button>Add Todo</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      todo: {
        text: ''
      }
    }
  },
  props: {
    newTodo: {
      type: Object,
      required: false,
    }
  },
  methods: {
    createToDo() {
      this.todo.id = Math.floor(Math.random() * 5000)
      this.$emit('create', this.todo)
      this.todo = {
      text: ''
      }
    }
  }
}

</script>

<style scoped>
  form {
    margin-bottom: 20px;
  }
</style>