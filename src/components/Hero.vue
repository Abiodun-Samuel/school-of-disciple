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
  z-index:2000;
}
.navbar {
  width: 100%;
}
.hero{
  position: relative;
  z-index: 99;
}

.nav-item.active .nav-link {
  color: #000; /* Change to desired active link color */
  background-color: #fff; /* Optional: change background color for active link */
}
.nav-link{
  color: white;
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
      <button class="navbar-toggler bg-white " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon position-relative"></span>
      </button>
      <div class="collapse  navbar-collapse position-relative d-md-flex justify-content-center" id="navbarText">
        <ul class="nav-pills nav position-relative">
          <li class="nav-item "  :class="{ active: activeItem === 'about' }">
            <a class="nav-link " href="#about" @click="setActive('about')">ABOUT</a>
          </li>
          <li class="nav-item"  :class="{ active: activeItem === 'courses' }">
            <a class="nav-link " href="#course" @click="setActive('courses')" >COURSE</a>
          </li>
          <li class="nav-item"  :class="{ active: activeItem === 'team' }">
            <a class="nav-link " href="#team" @click="setActive('team')">TEAM</a>
          </li>
          <li class="nav-item"  :class="{ active: activeItem === 'login' }">
            <a class="nav-link" href="#" @click="setActive('login')">LOGIN</a>
          </li>
          <li class="nav-item"  :class="{ active: activeItem === 'register' }">
            <a class="nav-link " href="#" @click="setActive('register')">REGISTER</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr class="text-white">
    <div class="container d-flex mt-5 overflow-y-hidden">
      <div ref="container" class=" d-flex flex-column gap-2  overflow-y-hidden">
          <h1 class="text-white overflow-y-hidden "> <span class="special">Welcome to School of Disciples </span></h1>
          <h5 class="overflow-y-hidden text-white text-center text-md-start  ">Our mission is to nurture and develop future leaders</h5>
              <h5  class="overflow-y-hidden text-white text-center text-md-start "> who are grounded in biblical truth, filled with the Holy Spirit,</h5>
              <h5 class="overflow-y-hidden text-white text-center text-md-start">and committed to serving their communities with excellence and compassion.</h5>                  
              <div class="d-flex justify-content-center justify-content-md-start gap-2 mt-4">
              <button class="btn active w-25  text-white">Login</button>
              <button class="btn active w-25  text-white">Register</button>
              </div>
          </div>
      </div> 
     </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const activeItem = ref(''); // Default active item
const container = ref(null);
const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};
const setActive = (item) => {
  activeItem.value = item;
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


