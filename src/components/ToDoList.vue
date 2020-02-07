<template>
  <div class="todos">
    <button type="button" @click="updateVisible">{{ filterLabel }}</button>
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
import {
  createComponent,
  reactive,
  SetupContext,
  computed
} from '@vue/composition-api'
import { ToDo } from '../types/ToDo'

interface Props {
  todos: ToDo[]
}

interface State {
  isVisibleCompleted: boolean
}

export default createComponent({
  props: {
    todos: { type: Array, required: true }
  },
  setup(props: Props, context: SetupContext) {
    const state: any = reactive<State>({
      isVisibleCompleted: true
    })

    const filterLabel = computed(() => {
      if (state.isVisibleCompleted) return '完了を非表示'
      return '完了も表示'
    })

    const visibleToDos = computed(() => {
      if (state.isVisibleCompleted) return props.todos
      return props.todos.filter(todo => !todo.isCompleted)
    })

    const updateCompleted = (id: string) => {
      context.emit('update-completed', id)
    }

    const updateVisible = () => {
      state.isVisibleCompleted = !state.isVisibleCompleted
    }

    return {
      filterLabel,
      visibleToDos,
      updateCompleted,
      updateVisible
    }
  }
})
</script>

<style scoped></style>
