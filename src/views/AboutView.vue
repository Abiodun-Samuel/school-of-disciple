<script setup>
import Team from '@/components/Team.vue';
import Nav_bar from '@/components/Nav_bar.vue'
import AboutMission from '@/components/AboutMission.vue';

</script>

<template>
  <div>
    <div class="header d-flex flex-column w-100 ">
      <div class="w-100">
        <Nav_bar/>
        <h1 class="special text-white text-center mt-5 overflow-hidden ">About Us</h1>
      </div>
    </div>
    <AboutMission/>
  <Team/>
</div>
</template>
<style>
.header {
  background-image:linear-gradient(180deg, #0bccee 0%, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.5) 100%,
         rgba(255, 255, 255, 0) 100%), url(../assets/images/gra.jpg);  
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  opacity: 0.9;
  transition: 0.7s;
  background-size: cover;

}
</style>
