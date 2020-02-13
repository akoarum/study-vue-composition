<template>
  <div>
    <ToDo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDo from '../vue2/ToDo.vue'

export default Vue.extend({
  components: { ToDo }
})
</script>

<style scoped></style>
