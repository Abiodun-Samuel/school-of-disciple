<template>
  <div ref="container" class="hero">
    <nav style="  background-color: rgb(30, 18, 70);" :class="['navbar', 'navbar-expand-md', 'navbar-light', 'd-flex', 'justify-content-center', { 'sticky': isSticky }]" ref="navbar">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img src="../assets/images/logo.png" alt="Logo" width="120px">
          <img src="../assets/images/rcg.png" alt="RCG" width="60px" class="ms-2">
        </div>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  :class="['collapse','mx-lg-5', 'navbar-collapse', { 'show': showNavbar }]" id="navbarText">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" :class="{ active: activeItem === 'about' }">
              <a class="nav-link" href="#about" @click="setActive('about')">ABOUT</a>
            </li>
            <li class="nav-item" :class="{ active: activeItem === 'courses' }">
              <a class="nav-link" href="#course" @click="setActive('courses')">COURSE</a>
            </li>
            <li class="nav-item" :class="{ active: activeItem === 'team' }">
              <a class="nav-link" href="#team" @click="setActive('team')">TEAM</a>
            </li>
            <li class="nav-item" :class="{ active: activeItem === 'login' }">
              <a class="nav-link" href="#" @click="setActive('login')">LOGIN</a>
            </li>
            <li class="nav-item" :class="{ active: activeItem === 'register' }">
              <a class="nav-link" href="#" @click="setActive('register')">REGISTER</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div data-aos="fade-up" data-aos-duration="1000" class="container d-flex justify-content-center mt-5 overflow-hidden">
      <div ref="container" class="d-flex mt-5 flex-column gap-2 justify-content-center text-center overflow-hidden">
        <h1 class="special">Welcome to School of Disciples</h1>
        <h4 class="text-white text-center">Our mission is to nurture and develop future leaders</h4>
        <h4 class="text-white text-center">who are grounded in biblical truth, filled with the Holy Spirit,</h4>
        <h4 class="text-white text-center">and committed to serving their communities with excellence and compassion.</h4>
        <a class="icon mt-5">
          <i class="bi bi-arrow-down-circle-fill mt-5 text-white fs-1" style="cursor: pointer;"></i>
        </a>
      </div>
    </div> 
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from "aos";

const activeItem = ref('');
const isSticky = ref(false);
const showNavbar = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 500;

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY <= bottom) {
      activeItem.value = section.id;
    }
  });
};

const toggleNavbar = () => {
  showNavbar.value = !showNavbar.value;
};

const setActive = (item) => {
  activeItem.value = item;
  showNavbar.value = false; // Close navbar after clicking a link
};

onMounted(() => {
  AOS.init();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.sticky {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1540px;
    background-color: rgb(30, 18, 70);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 2000;
    transition: top 0.3s;
}

.navbar-toggler {
  display: none;
}

@media (max-width: 991.98px) {
  .navbar-toggler {
    display: block;
  }
  .navbar-collapse {
    background-color: rgb(30, 18, 70);
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    z-index: 1999;
  }
}

.navbar-nav {
  text-align: center;
}

.nav-item .nav-link:hover{
  color: #000;
  background-color: #fff;
  border-radius: 5px;
}

.nav-link {
  color: white;
}

.hero {
  position: relative;
  z-index: 99;
}
</style>
