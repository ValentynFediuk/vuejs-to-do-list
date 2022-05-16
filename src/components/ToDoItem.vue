<template>
  <div class="ToDo">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <div class="ToDo-btns">
        <button @click="$emit('delete', todo)">X</button>
        <button>Edit</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
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