
<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue';
import Courses from '../components/Courses.vue';
import Team from '../components/Team.vue';
import LocateUs from '../components/LocateUs.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
</script>
<template>
    <div class="custom-container ">
        <HeroSection/>
        <About />
        <LocateUs/>
        <Courses/>
        <Team/>
        <Footer/> 
    </div>
</template>
<style >
.custom-container {
    max-width: 1540px;

  }
</style>