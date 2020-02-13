<template>
  <div>
    <div>{{ count }}</div>
    <button type="button" @click="increment">+1</button>
    <button type="button" @click="to100">100にする</button>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, toRefs } from '@vue/composition-api'

interface CountState {
  count: number
}

const useCounter = () => {
  const state = reactive<CountState>({
    count: 0
  })
  const increment = () => {
    state.count += 1
  }
  return {
    ...toRefs(state),
    increment
  }
}

export default createComponent({
  setup() {
    const { count, increment } = useCounter()
    const to100 = () => {
      count.value = 100
    }

    return { count, increment, to100 }
  }
})
</script>
