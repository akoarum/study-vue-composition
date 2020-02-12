<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDo from './components/ToDo.vue'

export default Vue.extend({
  name: 'app',
  components: { ToDo }
})
</script>

<style lang="scss"></style>
