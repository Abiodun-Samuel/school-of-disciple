<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>
<template>
  <div
    class="pop d-flex flex-column align-items-center gap-3 justify-content-center p-5 overflow-hidden"
  >
    <div class="cube"></div>
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
      <h3>Our Management</h3>
      <div></div>
    </div>
  </div>
</template>

<style>
.pop {
  background-color: #f5f5f5;
  margin-top: 50px;
  overflow: auto;
}
.cube {
  width: 10px;
  height: 10px;
  border: solid 1px #30236d;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
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
}
</style>
