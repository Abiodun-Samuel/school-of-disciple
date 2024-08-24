<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="custom-container">
    <RouterView />
  </div>
</template>

<style scoped>
.custom-container {
  max-width: 1540px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white; /* Optional background color */
  overflow: hidden;
}
</style>
