<script setup>
import { ref,onMounted} from 'vue';
import gsap from 'gsap';
import AOS from "aos";


const container = ref(null)


onMounted(() => {
    gsap.from(container.value,{
        display:0.5,
        duration:1,
        y:"+100",
        autoAlpha:0,
        stagger:0.25,
        ease:"back.inOut(2.7)",
        
    })
});

onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div data-aos="zoom-in"   data-aos-offset="300"
    data-aos-easing="ease-in-sine" class="container justify-content-center d-flex flex-column align-items-center mt-5 overflow-y-hidden" id="about">
       <h4 class="text-black-50">ABOUT US</h4>
       <h6 ref="container" style="line-height: 30px;" class="mx-lg-5 d-flex text-center mt-2">The School of Disciples was founded in 1985 by Pastor E.A. Adeboye, the General Overseer of RCCG Worldwide. It is coordinated by Christ the Redeemer’s Ministries, an evangelical arm of the Redeemed Christian Church of God. At this school, Christians of all denominations can learn to be true and genuine disciples of Jesus Christ and how to study to show themselves approved unto God.

        This school is for all believers who are ready to fulfill the command of the master in (John 14:12) “Verily verily I say unto you, he that believeth on me, the works that I do shall he do also and greater works than these shall he do, because I go unto my father”. 
        
        Concurrently, this is the motto of the school of disciples. Hence, we are saddled with the responsibility of producing disciples who would do the work of our master, Jesus, and train dynamic soldiers of the cross for the end-time warfare. In addition, we are tasked with equipping faithful men who will, in turn, teach others as well as impart basic teaching on every area of Christian living and service to make believers relevant to this present world and, in the end, make it to heaven.
        
        The whole training is more or less practical and includes direct lectures from the principal (Pastor E.A Adeboye). We therefore recommend this school to all denominations worldwide. Our focus is to make you an end-time army of Jesus Christ. May you remain heavenly conscious and focused as you go through the journey of life.
        
        The School of Disciples RCCG Americas 1 has centers located all over the United States of America. These centers meet in-person and/or virtually. Please see the list below to find a center near you. 
        </h6>
    </div>
</template>
<style>

</style>