<template>
  <div class="todos">
    <button type="button" @click="updateVisible">{{ label }}</button>
    <ul class="todos__list">
      <template v-for="todo in visibleToDos">
        <li :key="todo.id" class="todos__todo">
          <label>
            <input
              v-model="todo.isCompleted"
              type="checkbox"
              @change="updateCompleted"
            />
            <span>{{ todo.text }}</span>
          </label>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ToDo } from '../types/ToDo'

interface Data {
  isVisibleCompleted: boolean
}

export default Vue.extend({
  props: {
    todos: { type: Array as PropType<ToDo[]>, required: true }
  },
  data(): Data {
    return {
      isVisibleCompleted: true
    }
  },
  computed: {
    label(): string {
      return this.isVisibleCompleted ? '完了を非表示' : '完了も表示'
    },
    visibleToDos(): ToDo[] {
      if (this.isVisibleCompleted) return this.todos
      return this.todos.filter(todo => !todo.isCompleted)
    }
  },
  methods: {
    updateVisible() {
      this.isVisibleCompleted = !this.isVisibleCompleted
    },
    updateCompleted(id: string) {
      this.$emit('update-completed', id)
    }
  }
})
</script>

<style scoped></style>
