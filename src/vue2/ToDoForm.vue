<template>
  <div>
    <div>
      <label for="todo">ToDo</label>
      <input id="todo" v-model="model" type="text" />
    </div>
    <button type="button" @click="addTodo">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  value: string
}

export default Vue.extend({
  props: {
    value: { type: String, required: true }
  },
  computed: {
    model: {
      set(newValue: string) {
        this.$emit('input', newValue)
      },
      get(): string {
        return this.value
      }
    }
  },
  methods: {
    addTodo() {
      this.$emit('click')
    }
  }
})
</script>

<style scoped></style>
