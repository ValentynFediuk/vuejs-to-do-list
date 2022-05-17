<template>
  <div class="ToDo"
       :class="{editing: todo === editedTodo}"
  >
    <span @dblclick="editToDo(todo)">{{ todo.text}}</span>
    <input
        v-if="todo === editedTodo"
        class="edit"
        type="text"
        v-model="newTodo.text"
        @vnode-mounted="({ el }) => el.focus()"
        @blur="doneEdit(newTodo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.escape="cancelEdit(todo)"
    >

    <div class="ToDo-btns">
      <button @click="$emit('delete', 'someValue')">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beforeEditCache: '',
      newTodo: {
        text: ''
      },
      editedTodo: {
        text: ''
      }
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    editToDo() {
      this.beforeEditCache = this.todo.text
      this.editedTodo = this.todo
    },
    doneEdit() {
      this.newTodo = this.editedTodo
      this.$emit('clicked', this.editedTodo)
      this.editedTodo = null
    },
    removeToDo(value) {
      this.$emit('clicked', value)
    },
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

span {
  font-size: 30px;
}

.edit {
  position: absolute;
}
</style>