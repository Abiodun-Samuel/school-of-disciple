<script setup>
import Team from '@/components/Team.vue';
import AboutMission from '@/components/AboutMission.vue';
import Nav_bar from '@/components/Nav_bar.vue';

</script>

<template>
  <main class="">
    <div class="aboutView">
      <Nav_bar/>
      <h1 class="special text-white text-center mt-5 overflow-hidden ">About</h1>
    </div>
    <AboutMission/>
    <Team/>
    </main>
</template>
<style>
  .aboutView{
    background-image:linear-gradient(180deg, #0bccee 0%, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.5) 100%,
    rgba(255, 255, 255, 0) 100%), url(../assets/images/gra.jpg);  
height: 300px;
width: 100%;
background-repeat: no-repeat;
overflow-y: hidden;
opacity: 1;
transition: 0.7s;
background-size: cover;
position: relative;
  }
</style>
