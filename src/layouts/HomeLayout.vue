
<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue';
import Courses from '../components/Courses.vue';
import Team from '../components/Team.vue';
import LocateUs from '../components/LocateUs.vue';
</script>
<template>
    <div class="custom-container">

        <Hero/>
        <About />
        <LocateUs/>
        <Courses/>
        <Team/>
    </div>
</template>
<style >
.custom-container {
    max-width: 1540px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    background-color: white; /* Optional background color */
    overflow: hidden;
  }
</style>