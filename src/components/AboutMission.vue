<template>
    <div class="d-flex flex-column flex-md-row container mt-5 gap-4">
        <div data-aos="fade-up" class="col-md-6 col-12 ">
            <div class="d-flex flex-column gap-3 d-flex align-items-center align-items-md-start justify-content-center">
                    <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop-fill " viewBox="0 0 16 16">
                        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                    </svg>
                  <h3 class="abouthead">About Us</h3>
                  <p class="text-justify abouttxt">The School of Disciples was founded in 1985 by Pastor E.A. Adeboye, the General Overseer of RCCG Worldwide. 
                    It is coordinated by Christ the Redeemer’s Ministries, an evangelical arm of the Redeemed Christian Church of God. At this school, Christians
                     of all denominations can learn to be true and genuine disciples of Jesus Christ and how to study to show themselves approved unto God.

                    This school is for all believers who are ready to fulfill the command of the master in (John 14:12) “Verily verily I say unto you, he that
                     believeth on me, the works that I do shall he do also and greater works than these shall he do, because I go unto my father”. 
                    
                    The whole training is more or less practical and includes direct lectures from the principal (Pastor E.A Adeboye). We therefore recommend 
                    this school to all denominations worldwide. Our focus is to make you an end-time army of Jesus Christ. May you remain heavenly conscious and
                     focused as you go through the journey of life.
                    
                    The School of Disciples RCCG Americas 1 has centers located all over the United States of America. These centers meet in-person
                     and/or virtually. Please see the list below to find a center near you. 
                    
                        </p>
            </div>
        </div>
        <div data-aos="fade-down"  class="col-md-6 col-12">
            <div class="d-flex flex-column gap-3 d-flex align-items-center align-items-md-start justify-content-center">
                <svg data-aos="fade-down"  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>
                <h3 class="abouthead">Who we are</h3>
                <p class="text-justify abouttxt">The School of Disciples is a unique institution 
                    established by Christ the Redeemers’ Ministries, an evangelical arm of the 
                    Redeemed Christian Church of God under Pastor E. A. Adeboye, the General 
                    Overseer.
                    Concurrently, this is the motto of the school of disciples. Hence, we are saddled with the responsibility of producing disciples who would 
                    do the work of our master, Jesus, and train dynamic soldiers of the cross for the end-time warfare. In addition, we are tasked with equipping
                     faithful men who will, in turn, teach others as well as impart basic teaching on every area of Christian living and service to make believers
                      relevant to this present world and, in the end, make it to heaven.
                    
                    Its mission aligns with the biblical command in Matthew 28:19 to
                     "make disciples of all nations." The school is designed for believers who
                      are committed to fulfilling the words of Jesus in John 14:12, to do greater 
                      works in His name.The aim is to train disciples and dynamic 
                      soldiers of Christ for end-time warfare, equipping them with practical
                       teachings for Christian living and service. The school is recommended 
                       for all denominations worldwide, with a focus on producing an end-time
                        army for Jesus Christ.

                       </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted} from 'vue';
import AOS from "aos";
onMounted(() => {
    AOS.init();
})
</script>
<style>
.abouttxt{
    color:#828282;
    font-size: 16px;
    line-height: 1.9;
}
.abouthead{
    font-size: 32px;
    color:#060221;
}
</style>