<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const container = ref(null)

onMounted(() => {
  gsap.from(container.value.children, {
    display: 0.5,
    duration: 1,
    x: '-10',
    autoAlpha: 0,
    stagger: 0.25,
    ease: 'back.inOut(2.7)'
  })
})
</script>
<template>
  <div class="ltl d-flex flex-column mt-5 overflow-hidden" id="course">
    <div
      data-aos="zoom-in-up"
      class="container d-flex justify-content-around align-items-center align-content-center"
    >
      <!--  <h2 >Join Our School of Ministry, Create an account</h2>
                <button style="border-radius: 5px;" >Register</button> -->
      <div>
        <div class="d-flex gap-1 flex-column justify-content-center align-items-center">
          <i class="fa fa-graduation-cap" style="font-size: 40px" aria-hidden="true"></i>
          <h3 class="txt" style="font-size: 1.125rem">Learning</h3>
          <p class="txte">You can learn at your own pace</p>
        </div>
      </div>
      <div>
        <div class="d-flex gap-1 flex-column justify-content-center align-items-center">
          <i class="fa fa-trophy" style="font-size: 40px" aria-hidden="true"></i>
          <h3 class="txt" style="font-size: 1.125rem">Registration</h3>
          <p class="txte">Register and Pay Online</p>
        </div>
      </div>
      <div>
        <div class="d-flex gap-1 flex-column justify-content-center align-items-center">
          <i class="fa fa-certificate" style="font-size: 40px" aria-hidden="true"></i>
          <h3 class="txt" style="font-size: 1.125rem">Certification</h3>
          <p class="txte">Earn a certificate online</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ltl {
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
}
.txt {
  color: #ffc107;
}
.txte {
  color: rgb(198, 189, 189);
}
.custom-card {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  background: rgb(30, 0, 128);
  z-index: 1;
}
button {
  background: green;
  color: white;
  border: none;
  width: 120px;
  height: 60px;
}
</style>
