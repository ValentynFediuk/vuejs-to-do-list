<template>
  <div class="ToDo">
      <span @dblclick="editToDo(todo)" :class="{ done: todo.done }">{{ todo.text }}</span>
      <input
        v-if="todo === editedTodo"
        class="edit"
        type="text"
        v-model="newTodo.text"
        @vnode-mounted="({ el }) => el.focus()"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.escape="cancelEdit(todo)"
      >
      <div class="ToDo-btns">
        <button @click="$emit('delete', todo)">X</button>
        <button>Edit</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beforeEditCache: '',
      editedTodo: this.todo.text,
      newTodo: ''
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    editToDo(todo) {
      this.beforeEditCache = todo.text
      this.editedTodo = this.newTodo
    },
    cancelEdit(todo) {
      this.editedTodo.value = null
      todo.text = this.beforeEditCache
    },
    doneEdit(todo) {
      if (this.editedTodo) {
        this.editedTodo.value = null
        todo.text = todo.text.trim()
        if (!todo.text) this.removeToDo(todo)
      }
    },
    removeToDo() {
      return
    }
  }
}
</script>

<style scoped>
  .ToDo {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid snow;
    border-bottom: 1px solid snow;
  }
  form {
    display: flex;
  }
  .ToDo-btns {
    display: flex;
    margin-left: 20px;
  }
  .ToDo-btns button {
    padding: 5px 50px;
    margin-left: 20px;
    border-radius: 15px;
    border: 1px black solid;
    transition: all .5s ease-in-out;
    color: black;
  }
  .ToDo-btns button:hover {
    font-size: 30px;
    background: green;
    color: snow;
  }
  span {
    font-size: 30px;

  }
</style>