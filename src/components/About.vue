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
    <div
        class="container justify-content-center d-flex 
        flex-sm-colum-reverse align-items-center  mt-5 overflow-y-hidden" 
        id="about"
        >
        <div class="container row"> 
            <picture data-aos="fade-right" class='col d-flex justify-content-center align-content-center d-none d-lg-block'>
                <img src="../assets/images/Pastor5.jpg" alt="" class="img-fluid border-1">
            </picture>
                <div
                class="col" data-aos="fade-left">
                    <h4 class="text-black text-center mt-5 text-lg-start">ABOUT US</h4>
                    <p  ref="container" style="line-height: 30px; font-size: 15px; font-size: 14px;  text-align: justify; overflow: hidden;" class="  d-flex mt-2 ">The School of Disciples was founded in 1985 by Pastor E.A. Adeboye, the General Overseer of RCCG Worldwide. It is coordinated by Christ the Redeemer’s Ministries, an evangelical arm of the Redeemed Christian Church of God. At this school, Christians of all denominations can learn to be true and genuine disciples of Jesus Christ and how to study to show themselves approved unto God.
                         This school is for all believers who are ready to fulfill the command of the master in (John 14:12) “Verily verily I say unto you, he that believeth on me, the works that I do shall he do also and greater works than these shall he do, because I go unto my father”. 
                          Concurrently, this is the motto of the school of disciples. Hence, we are saddled with the responsibility of producing disciples who would do the work of our master, Jesus, and train dynamic soldiers of the cross for the end-time warfare.In addition, we are tasked with equipping faithful men who will, in turn, teach others as well as impart basic teaching on every area of Christian living and service to make believers relevant to this present world and, in the end, make it to heaven.
                          The whole training is more or less practical and includes direct lectures from the principal (Pastor E.A Adeboye). We therefore recommend this school to all denominations worldwide. Our focus is to make you an end-time army of Jesus Christ. May you remain heavenly conscious and focused as you go through the journey of life.
                          The School of Disciples RCCG Americas 1 has centers located all over the United States of America. These centers meet in-person and/or virtually. Please see the list below to find a center near you.   
                          </p>
                          </div>
                          </div> 
                          </div>
</template>
<style>
</style>