<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
/* import SubTeamPage from './SubTeamPage.vue';
import Slider2 from './slider2.vue';
 */
onMounted(() => {
  AOS.init()
})
</script>
<template>
  <div
    class="pop d-flex flex-column align-items-center gap-3 justify-content-center p-5 overflow-hidden"
  >
    <h3>The Purpose</h3>
    <div
      class="row flex-md-row gap-3 h-100 overflow-hidden flex-column justify-content-center w-100 position-relative"
    >
      <div data-aos="fade-up" data-aos-delay="200" class="col-lg-2 col-md-6 box">
        <div class="d-flex w-100 gap-2 h-100 justify-content-center align-items-center flex-column">
          <i class="fa fa-diamond icons" aria-hidden="true"></i>
          <p class="text-center">
            To impact basic teachings on every area of Christian living and service
          </p>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-delay="300" class="col-lg-2 col-md-6 box">
        <div class="d-flex w-100 gap-2 h-100 justify-content-center align-items-center flex-column">
          <i class="fa fa-diamond icons" aria-hidden="true"></i>
          <p class="text-center">To train dynamic soldiers of the cross for this endtime warfare</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" class="col-lg-2 col-md-6 box">
        <div class="d-flex w-100 gap-2 h-100 justify-content-center align-items-center flex-column">
          <i class="fa fa-diamond icons" aria-hidden="true"></i>
          <p class="text-center">To produce disciples who would do the works of Jesus</p>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-delay="500" class="col-lg-2 col-md-6 box">
        <div class="d-flex w-100 gap-2 h-100 justify-content-center align-items-center flex-column">
          <i class="fa fa-diamond icons" aria-hidden="true"></i>
          <p class="text-center">To produce disciples who would do the works of Jesus</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center flex-column align-items-center mt-5">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <h3>School of Disciple Courses</h3>
        <p>Achieve your goals with SOD</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="d-flex flex-lg-row flex-column justify-content-between gap-4">
          <div class="card" style="width: 20rem; position: relative;">
          <img src="../assets/images/regular.jpg" class="card-img" alt="">
          <div class="card-img-overlay d-flex align-items-end">
            <div class="d-flex flex-column">
              <div class="d-flex gap-2 align-content-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-front" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
                  </svg>
                  <p>10 Lessons</p>
                  </div>
                <span class="text-white">REGULAR</span>
                </div>
          </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="250" class="card" style="width: 20rem; position: relative;">
          <img src="../assets/images/executive.jpg" class="card-img" alt="">
          <div class="card-img-overlay d-flex align-items-end">
            <div class="d-flex flex-column">
              <div class="d-flex gap-2 align-content-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-front" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
                  </svg>
                  <p>18 Lessons</p>
                  </div>
                <span class="text-white">EXECUTIVE</span>
                </div>
          </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" class="card" style="width: 20rem; position: relative;">
          <img src="../assets/images/refresher.jpg" class="card-img" alt="">
          <div class="card-img-overlay d-flex align-items-end">
            <div class="d-flex flex-column">
              <div class="d-flex gap-2 align-content-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-front" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
                  </svg>
                  <p>23 Lessons</p>
                  </div>
                <span class="text-white">REFRESHER</span>
                </div>
          </div>
          </div>
          </div>
    </div>
  </div>
</template>

<style>
.pop {
  background-color: #f5f5f5;
  margin-top: 50px;
  overflow: auto;
}
.box {
  position: relative;
  background: #fff;
  box-shadow: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.6;
  font-family: 'Poppins', Helvetica, sans-serif;
  color: #555;
  transition: transform 0.3s ease-out;
  padding: 40px 30px 30px 30px;
}

.box:hover {
  transform: translate(0, -5px);
}
.icons {
  font-size: 40px;
  color:#0054a6;
}
</style>
