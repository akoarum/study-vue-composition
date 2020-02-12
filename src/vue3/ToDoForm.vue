<template>
  <div>
    <div>
      <label for="todo">ToDo</label>
      <input id="todo" v-model="value" type="text" />
    </div>
    <button type="button" @click="addTodo">Add</button>
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext, computed } from '@vue/composition-api'

interface Props {
  todo: string
}

export default createComponent({
  props: {
    todo: { type: String, required: true }
  },
  model: {
    prop: 'todo'
  },
  setup(props: Props, context: SetupContext) {
    const value = computed({
      get: () => props.todo,
      set: (newValue: string) => {
        context.emit('input', newValue)
      }
    })
    const addTodo = () => {
      context.emit('click')
    }

    return {
      value,
      addTodo
    }
  }
})
</script>

<style lang="scss" scoped></style>
