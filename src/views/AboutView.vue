<script setup>
import Team from '@/components/Team.vue';

</script>

<template>
  <div style="background-color:#f8f8f8">
  <div class="header">
    <h1 class="special text-white overflow-hidden mt-5">About U</h1>
  </div>
  <Team/>
</div>
</template>

<style>
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/images/hero.jpg);
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  opacity: 0.9;
  transition: 0.7s;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
