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
    <div class="container h-50 d-flex mt-5 overflow-y-hidden">
        <div ref="container" class=" d-flex flex-column gap-2 overflow-y-hidden">
            <h1 class="text-white overflow-y-hidden fs-1 "> <span class="special">Welcome to School of Disciples </span></h1>
            <h5 class="overflow-y-hidden text-white text-center text-md-start ">Our mission is to nurture and develop future leaders</h5>
                <h5  class="overflow-y-hidden text-white text-center text-md-start"> who are grounded in biblical truth, filled with the Holy Spirit,</h5>
                <h5 class="overflow-y-hidden text-white text-center text-md-start">and committed to serving their communities with excellence and compassion.</h5>                  
                <div class="d-flex justify-content-center justify-content-md-start gap-2 mt-4">
                <button class="btn active w-25  text-white">Login</button>
                <button class="btn active w-25  text-white">Register</button>
                </div>
            </div>
        </div>
</template>
<style>

</style>