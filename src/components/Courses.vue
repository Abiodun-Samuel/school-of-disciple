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
        <div style=" background: rgb(30, 18, 70); height: 200px;" class=" d-flex align-items-center flex-column mt-5 ">
            <div class="container">
                <h2 class="text-white my-5 d-flex gap-2"><span class="special">COURSES</span> WE OFFER</h2>
            </div>
        </div>
        <div style="margin-top: -80px;" class="container ">
            <div class="card custom-card">
                <div class="card-body">
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