<script setup>
import { RouterView } from 'vue-router'
import Nav_bar from '@/components/Nav_bar.vue'
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="custom-container">
    <Nav_bar />
    <RouterView />
    <Footer/>
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
