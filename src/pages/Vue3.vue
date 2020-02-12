<template>
  <div>
    <ToDo />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import ToDo from '../vue3/ToDo.vue'

export default createComponent({
  components: { ToDo }
})
</script>

<style scoped></style>
