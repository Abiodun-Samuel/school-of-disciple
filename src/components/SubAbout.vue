<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import AOS from 'aos'

const container = ref(null)

onMounted(() => {
  gsap.from(container.value, {
    display: 0.5,
    duration: 1,
    y: '+100',
    autoAlpha: 0,
    stagger: 0.25,
    ease: 'back.inOut(2.7)'
  })
})

onMounted(() => {
  AOS.init()
})
</script>
<template>
  <div
    class="container justify-content-center d-flex flex-sm-colum-reverse align-items-center mt-5"
    id="about"
  >
    <div class="container row">
      <picture
        data-aos="fade-right"
        class="col d-flex justify-content-center align-content-center d-none d-lg-block"
      >
        <img src="../assets/images/Pastor5.jpg" alt="" class="img-fluid border-1" />
      </picture>
      <div class="col overflow-hidden" data-aos="fade-left">
        <h4 class="text-black text-center mt-5 text-center">About Us</h4>
        <p
          ref="container"
          style="line-height: 30px; font-size: 15px; font-size: 14px; text-align: justify"
          class="d-flex mt-2"
        >
          The School of Disciples, founded in 1985 by Pastor E.A. Adeboye, is an initiative by
          Christ the Redeemer’s Ministries under the Redeemed Christian Church of God (RCCG). It
          aims to train Christians from all denominations to become true disciples of Jesus Christ,
          fulfilling the command from John 14:12 to perform works like Jesus and even greater. The
          school focuses on practical training, including lectures from Pastor Adeboye, to equip
          believers for effective Christian living and service. It prepares them to become dynamic
          disciples and end-time soldiers of Christ. The School of Disciples RCCG Americas 1 has
          centers across the U.S., offering both in-person and virtual meetings
        </p>
      </div>
    </div>
  </div>
</template>
<style></style>
