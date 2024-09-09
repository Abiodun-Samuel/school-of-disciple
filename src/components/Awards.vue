<script >
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const container = ref(null);

onMounted(() => {
  gsap.from(container.value.children, {
    opacity: 0,       // Animate opacity instead of display
    duration: 1,
    x: -10,           // Move elements from the left
    stagger: 0.25,    // Stagger animation for each child
    ease: 'back.inOut', // Ease animation
  });
});
</script>

<template>
  <div class="ltl d-flex flex-column mt-5 overflow-hidden" id="course">
    <div
      ref="container"   
      data-aos=""
      class="container d-flex justify-content-around gap-5 flex-md-row flex-column align-items-center align-content-center"
    >
      <div class="d-flex gap-2 flex-column justify-content-center align-items-center">
        <i class="fa fa-graduation-cap iconsaward" style="font-size: 40px;" aria-hidden="true"></i>
        <h3 class="txt" style="font-size: 1.125rem">Learning</h3>
        <p class="txte">You can learn at your own pace</p>
      </div>
      <div class="d-flex gap-2 flex-column justify-content-center align-items-center">
        <i class="fa fa-trophy iconsaward" style="font-size: 40px;" aria-hidden="true"></i>
        <h3 class="txt" style="font-size: 1.125rem">Registration</h3>
        <p class="txte">Register and Pay Online</p>
      </div>
      <div class="d-flex gap-2 flex-column justify-content-center align-items-center">
        <i class="fa fa-certificate iconsaward" style="font-size: 40px;" aria-hidden="true"></i>
        <h3 class="txt" style="font-size: 1.125rem">Certification</h3>
        <p class="txte">Earn a certificate online</p>
      </div>
    </div>
  </div>
</template>

<style>
.ltl {
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
}
.txt {
  color: black;
}

.txte {
  display: flex;
  text-align: center;
  color: #111;
}
.custom-card {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  background: rgb(30, 0, 128);
  z-index: 1;
}
.iconsaward{
  background: linear-gradient(180deg, #34dbc5, #4fda91);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;  
  cursor: pointer;
}
.iconsaward:hover{
  background: linear-gradient(180deg, #34dbc5, #4fda91);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
button {
  background: green;
  color: white;
  border: none;
  width: 120px;
  height: 60px;
}
@media (max-width: 991.98px) {
  .ltl {
    height: 100%;
    padding: 30px 0;
  }
}
</style>
