<template>
  <div>
    <ToDoForm v-model="inputValue" @click="addToDo" />
    <ToDoList :todos="todos" @update-completed="updateCompleted" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoForm from './ToDoForm.vue'
import ToDoList from './ToDoList.vue'
import { ToDo } from '../types/ToDo'
import uuidv4 from 'uuid/v4'

interface Data {
  inputValue: string
  todos: ToDo[]
}

export default Vue.extend({
  components: { ToDoForm, ToDoList },
  data(): Data {
    return {
      inputValue: '',
      todos: []
    }
  },
  methods: {
    addToDo() {
      if (!this.inputValue) return
      this.todos = this.todos.concat([
        {
          id: uuidv4(),
          text: this.inputValue,
          isCompleted: false
        }
      ])
      this.inputValue = ''
    },
    updateCompleted(id: string) {
      this.todos.map((todo: ToDo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      })
    }
  }
})
</script>

<style scoped></style>
