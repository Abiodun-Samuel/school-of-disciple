<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div ref="container" class="header overflow-hidden">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="container yes d-flex justify-content-center  overflow-hidden"
    >
      <div
        ref="container"
        class="d-flex  h-100 mt-lg-2 flex-column gap-2 justify-content-center text-center overflow-hidden opacity-100"
      >
      <div class="w-100 d-flex justify-content-center flex-column align-items-center">
        <h1 class="special text-white overflow-hidden mt-5">Welcome to School of Disciples</h1>
          <h5 class="text-white col-12 col-md-8 lh-lg">
            Empowering future leaders with biblical truth, Holy Spirit guidance, and compassionate service
          </h5>
        </div>
        <h5 class="text-white text-center">
        </h5>
        <a ref="btn" class="icon mt-1" @click="scrollToBottom">
          <i class="fa fa-arrow-down" aria-hidden="true" style="cursor: pointer"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="decore"></div>
</template>
<script setup>
import { ref, onMounted,} from "vue";
import gsap from "gsap";

const btn = ref(null);
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

onMounted(() => {
  gsap.from(btn.value, {
    opacity: 0,
    duration: 1,
    y: "+10",
    autoAlpha: 0,
    stagger: 0.25,
    ease: "back.inOut(2.7)",
  });

  gsap.to(".icon", {
    y: "-5px",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 0.8,
  });
});
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
.yes{
  height:500px;
}
.special  {
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
.icon i{
  background: white;
  padding: 20px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
@media (max-width: 576px) {
  .special {
    font-size: 40px;
  }
  .header {
    height: 650px;
  }
  .yes{
    height:600px;
  }
}
</style>
