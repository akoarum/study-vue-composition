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
import {
  createComponent,
  reactive,
  SetupContext,
  computed,
  ref
} from '@vue/composition-api'
import { ToDo } from '../types/ToDo'

interface Props {
  todos: ToDo[]
}

interface State {
  isVisibleCompleted: boolean
}

const useToDoList = (props: Props, state: State) => {
  const visibleToDos = computed(() => {
    if (state.isVisibleCompleted) return props.todos
    return props.todos.filter(todo => !todo.isCompleted)
  })
  return { visibleToDos }
}

const useFilterButton = (context: SetupContext, state: State) => {
  const label = computed(() => {
    if (state.isVisibleCompleted) return '完了を非表示'
    return '完了も表示'
  })
  const updateVisible = () => {
    state.isVisibleCompleted = !state.isVisibleCompleted
  }

  return { label, updateVisible }
}

export default createComponent({
  props: {
    todos: { type: Array, required: true }
  },
  setup(props: Props, context: SetupContext) {
    const state: any = reactive<State>({
      isVisibleCompleted: true
    })
    const { visibleToDos } = useToDoList(props, state)
    const { label, updateVisible } = useFilterButton(context, state)
    const updateCompleted = (id: string) => {
      context.emit('update-completed', id)
    }

    return {
      visibleToDos,
      label,
      updateVisible,
      updateCompleted
    }
  }
})
</script>

<style scoped></style>
