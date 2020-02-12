<template>
  <div>
    <ToDoForm v-model="inputValue" @click="addToDo" />
    <ToDoList :todos="todos" @update-completed="updateCompleted" />
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

const useToDo = () => {
  const inputValue = ref<string>('')
  const todos = ref<ToDo[]>([])
  const addToDo = () => {
    if (!inputValue) return
    todos.value = todos.value.concat([
      {
        id: uuidv4(),
        text: inputValue.value,
        isCompleted: false
      }
    ])
    inputValue.value = ''
  }
  const updateCompleted = (id: string) => {
    todos.value.map((todo: ToDo) => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isCompleted: !todo.isCompleted
      }
    })
  }

  return { inputValue, todos, addToDo, updateCompleted }
}

export default createComponent({
  components: { ToDoForm, ToDoList },
  setup() {
    const { inputValue, todos, addToDo, updateCompleted } = useToDo()
    return { inputValue, todos, addToDo, updateCompleted }
  }
})
</script>

<style scoped></style>
