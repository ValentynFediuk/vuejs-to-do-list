<template>
  <div class="ToDo">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <div class="ToDo-btns">
        <button @click="$emit('remove', todo)">X</button>
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

</style>