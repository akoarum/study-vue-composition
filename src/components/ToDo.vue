<template>
  <div>
    <ToDoForm v-model="state.value" @click="addToDo" />
    <ToDoList :todos="state.todos" @update-completed="updateCompleted" />
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  reactive,
  ref,
  SetupContext
} from '@vue/composition-api'
import ToDoForm from './ToDoForm.vue'
import ToDoList from './ToDoList.vue'
import { ToDo } from '../types/ToDo'
import uuidv4 from 'uuid/v4'

interface State {
  value: string
  todos: ToDo[]
}

export default createComponent({
  components: { ToDoForm, ToDoList },
  setup() {
    const state: any = reactive<State>({
      value: '',
      todos: []
    })
    const addToDo = () => {
      if (!state.value) return
      state.todos = state.todos.concat([
        {
          id: uuidv4(),
          text: state.value,
          isCompleted: false
        }
      ])
      state.value = ''
    }
    const updateCompleted = (id: string) => {
      state.todos = state.todos.map((todo: ToDo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      })
    }

    return {
      state,
      addToDo,
      updateCompleted
    }
  }
})
</script>

<style scoped></style>
