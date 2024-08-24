<script setup>
import Awards from '@/components/Awards.vue'
import Goals from '@/components/Goals.vue'
import Hero from '@/components/Hero.vue'
import Mission from '@/components/Mission.vue'
import Nav_bar from '@/components/Nav_bar.vue'
import SubAbout from '@/components/SubAbout.vue'
</script>

<template>
  <main>
    <Nav_bar />
    <Hero />
    <SubAbout />
    <Awards />
    <Mission />
    <Goals />
    <router-link to="/about">About</router-link>
  </main>
</template>
<script></script>
