<template>
  <div id="app">
    <router-link to="/vue2">Vue 2版</router-link>
    <router-link to="/vue3">Vue 3版</router-link>
    <router-link to="/vue3-counter">Vue 3のカウンター</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app'
})
</script>

<style lang="scss"></style>
