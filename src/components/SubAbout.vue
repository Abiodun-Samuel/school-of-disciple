<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import AOS from 'aos'

const container = ref(null)

onMounted(() => {
  gsap.from(container.value, { 
    opacity: 0.5,
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
  <div class="goal">
      <div ref="container" class="container mt-5">
    <div class="flex-md-row gap-4 gap-md-4 flex-column-reverse d-flex justify-content-between ">
      <!-- Carousel Column -->
      <div class="col-lg-6 col-md-12">
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div>
                <h1 class="goaltext">We are the evangelical arm of the Redeemed Christian Church of God.</h1>
                <p class="subtext">
                  It is a place where Christians from all denominations are trained to become true and genuine disciples of Jesus Christ, learning how to study and live in a way that is approved by God.
                  </p>
                  <a href="" class="goalLink">More About us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                    </a>
                  </div>
            </div>
            <div class="carousel-item">
              <div>
                <h1 class="goaltext">We are the evangelical arm of the Redeemed Christian Church of God.</h1>
                <p class="subtext">
                  It is a place where Christians from all denominations are trained to become true and genuine disciples of Jesus Christ, learning how to study and live in a way that is approved by God.
                  </p>
                  <a href="" class="goalLink">More About us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                    </a>
                  </div>            
                  </div>
          </div>
          <div class="btn">
          <button class="carousel  btnicon" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon " aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
              </svg>
              </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="btnicon " type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon " aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
              </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="mage col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
        <picture  class="w-100">
          <img src="../assets/images/PDad.jpg" alt="" class="img-fluid border-1" />
        </picture>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>
.goal{
  margin-top: 40px;
/*   background:#FAFAFA;
 */  padding: 20px 0;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.goaltext{
  font-size: 50px;
  font-weight:bolder;
}
.goalLink{ 
    color: #8dd816;
    font-size: 18px !important;
    letter-spacing: 0.075em !important;
}
.subtext{
  font-size: 20px;
  line-height: 1.6em;
  color: rgb(103, 103, 103);
  margin-top: 40px;
}
.btn{
  position: relative;
  margin-top: 30px;
  display: flex;
}
.btnicon{
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 50%;
  color: black;
  background: white;
  border: 1px solid #8dd816; 
  margin-right: 20px;


}
.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 30px;
}
@media screen and (max-width:500px) {
  .goaltext{
    font-size: 30px;
  }
  
}
</style>
