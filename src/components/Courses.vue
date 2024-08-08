<script setup>
import { ref,onMounted} from 'vue';
import gsap from 'gsap';

const container = ref(null)

onMounted(() => {
    gsap.from(container.value.children,{
        display:0.5,
        duration:1,
        x:"-100",
        autoAlpha:0,
        stagger:0.25,
        ease:"back.inOut(2.7)",
        
    })
});
</script>
<template>
    <div>
        <div class=" d-flex flex-column mt-5 " id="course">
            <div class="container text-center">
                <h2 class="text-dark "><span class="">COURSES</span> WE OFFER</h2>
            </div>
        </div>
        <div  class="container ">
            <div class="card custom-card  z-0">
                <div class="card-body position-relative d-inline-block">
                  <h5 class="card-title">This are the courses we Offer</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>  
                </div> 
        </div>
    </div>
</template>
<style>
.custom-card {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    background: rgb(30, 0, 128);
    z-index: 1;
  }
  

</style>