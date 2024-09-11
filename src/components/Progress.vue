<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container gap-5 gap-md-0 mx-md-5 mt-5 d-flex flex-column flex-md-row  justify-content-center ">
            <div class="d-flex gap-2 flex-column justify-content-center align-items-center ">
                <div  ref="goalContainer1" class="goal d-flex justify-content-center align-items-center shadow">
                <span class=" icon-link-hover pe-auto " style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                        <use xlink:href="#clipboard"></use>
                      </svg>                
                    </span>
                </div>
                <h4 class="mt-2 fw-bolder">ULTIMATE</h4>
                <span style=" font-size: 16px;color: #808080;line-height: 27px"
                 class="w-75 text-center">
                    To make believers (i. e. members and non members of the Redeemed Christian Church of God) in the whole world trained disciples of Jesus Christ.
                </span>
            </div>
            <div class="d-flex gap-2 flex-column justify-content-center align-items-center ">
                <div ref="goalContainer2" class="goal d-flex justify-content-center align-items-center shadow">
                <span class=" icon-link-hover pe-auto " style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                        <use xlink:href="#clipboard"></use>
                      </svg>                
                    </span>
                </div>
                <h4 class="mt-2 fw-bolder ">INTERNATION GOAL</h4>
                <span style="font-size: 16px;color: #808080;line-height: 27px"
                 class="w-75 text-center"> To make members and non members of the Redeemed
                 Christian Church of God in both home and abroad 
                 trained disciples (i.e. true followers of Jesus Christ). 
                </span>
            </div>       
            <div class="d-flex gap-2 flex-column justify-content-center align-items-center ">
                <div ref="goalContainer3" class="goal d-flex justify-content-center align-items-center shadow">
                <span class=" icon-link-hover pe-auto " style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                        <use xlink:href="#clipboard"></use>
                      </svg>                
                    </span>
                </div>
                <h4 class="mt-2 fw-bolder">IMMEDIATE GOAL</h4>
                <span style="font-size: 16px;color: #808080;line-height: 27px"
                 class="w-75 text-center">
                 To make sure everyone that enrolls in the School of Disciples knows how to follow Jesus Christ correctly until they get to heaven.
                </span>
            </div>
       
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const goalContainer1 = ref(null);
const goalContainer2 = ref(null);
const goalContainer3 = ref(null);

onMounted(() => {
  const rollIn = (element, delay) => {
    gsap.from(element, {
      duration: 1.5,
      x: -300,    // Start off-screen to the left
      opacity: 0, // Start with 0 opacity
      rotation: 360, // Roll in with 360-degree rotation
      ease: 'power2.out',
      delay: delay ,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // Animation triggers when the element is 80% from the top of the viewport
        toggleActions: 'play none none none',
      },// Add a delay for each element
    });
  };

  // Animate each container with a delay
  rollIn(goalContainer1.value, 0);
  rollIn(goalContainer2.value, 0.3);
  rollIn(goalContainer3.value, 0.6);
});
</script>
<style scoped>
.goal{
   width:150px;
   height: 150px;
   border-radius: 50%;
   cursor: pointer;
}
.goal:hover{
    background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
    color: white;

}
</style>