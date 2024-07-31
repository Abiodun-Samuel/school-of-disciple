<style scoped>
.sticky {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color:rgb(30, 18, 70) ;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index:auto;

}
.navbar {
  width: 100%;
}
</style>

<template>
  <div ref="container" class="hero">
    <div class="container d-flex justify-content-center mt-3">
      <img src="../assets/images/logo.png" alt="Logo" width="150px">
      <img src="../assets/images/rcg.png" alt="RCG" width="80px">
    </div>
    <hr class="text-white">
    <nav :class="['navbar', 'navbar-expand-lg', 'navbar-light', 'd-flex', 'justify-content-center', { 'sticky': isSticky }]" ref="navbar">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse  navbar-collapse d-md-flex justify-content-center" id="navbarText">
        <ul class="nav-pills nav">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">ABOUT</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">COURSE</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">TEAM</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">LOGIN</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">REGISTER</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr class="text-white">
    <Info />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import Info from './info.vue';

const container = ref(null);
const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};

onMounted(() => {
  gsap.from(container.value.children, {
    opacity: 0,
    duration: 1,
    x: "-100%",
    stagger: 0.25,
    ease: "back.inOut(2.7)",
  });
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


