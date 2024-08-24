<template>
  <div ref="container" class="header overflow-hidden">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="container d-flex justify-content-center mt-md-5 overflow-hidden"
    >
      <div
        ref="container"
        class="d-flex mt-5 flex-column gap-2 justify-content-center text-center overflow-hidden opacity-100"
      >
        <h1 class="special text-white overflow-hidden mt-5">Welcome to School of Disciples</h1>
        <h5 class="text-white">Our mission is to nurture and develop future leaders</h5>
        <h5 class="text-white text-center">
          who are grounded in biblical truth, filled with the Holy Spirit,
        </h5>
        <h5 class="text-white text-center">
          and committed to serving their communities with excellence and compassion.
        </h5>
        <a ref="btn" class="icon mt-5" @click="scrollToBottom">
          <i class="bi bi-arrow-down-circle-fill mt-5 text-white fs-1" style="cursor: pointer"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="decore"></div>
</template>
<script setup>
/* 

const btn = ref(null)
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

onMounted(() => {
  gsap.from(btn.value, {
    opacity: 0,
    duration: 1,
    y: '+10',
    autoAlpha: 0,
    stagger: 0.25,
    ease: 'back.inOut(2.7)'
  })

  gsap.to('.icon', {
    y: '-10px',
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    duration: 0.8
  })
})
 */
/*   onMounted(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  }); */
</script>
<style scoped>
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/images/hero.jpg);
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  opacity: 0.9;
  transition: 0.7s;
  background-size: cover;
}
.special {
  color: white;
  display: flex;
  text-align: center;
  font-weight: 900;
  font-size: 60px;
}
.decore {
  position: relative;
  background-image: url(../assets/images/decor.png);
  height: 50px;
  width: 100%;
  z-index: 99;
  margin-top: -40px;
  opacity: 1;
  background-repeat: no-repeat;
}
@media (max-width: 576px) {
  .special {
    font-size: 35px;
  }
  .header {
    height: 500px;
  }
}
</style>
