<template>
  <div>
    <Counter />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Counter from '../vue3/Counter.vue'

export default createComponent({
  components: { Counter }
})
</script>
