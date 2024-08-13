<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AOS from "aos";

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const rollingObject = ref(null);

onMounted(() => {
    gsap.fromTo(
      container.value,
      { rotate: 0 },
      { rotate: 360, duration: 2, ease: "power1.inOut", repeat: -1 }
    );
  AOS.init();
});
</script>
<template>
<!--     <div class="mt-5 container align-items-center d-flex flex-column justify-content-center">
 -->        <div class="no-select  d-flex align-items-center justify-content-center flex-column mt-5 mb-3 " id="team">
            <div class="container  justify-content-center d-flex ">
                <h1 class="">MEET THE TEAM</h1>
            </div>
        </div>
       <div class="container  text-center">
        <div class="d-lg-flex team gap-3 justify-content-center align-content-center ">
            <div class="card byn">
                <img class="card-img-top" src="../assets/images/Pastor5.jpg" alt="Card image cap"  height="250px" >
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button class="w-100">Read More</button>
              </div>
              <div class="card byn">
                <img class="card-img-top" src="../assets/images/Pastor2.jpg" alt="Card image cap" height="250px" >
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button class="w-100">Read More</button>
              </div>
              <div class="card byn">
                <picture>
                    <img class="w-100 object-fit-cover" src="../assets/images/p1.jpg" alt="Card image cap"  height="250px" >
                </picture>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button class="w-100">Read More</button>
              </div>
              <div  class="card byn">
                <div class="profil">
                 <img class="card-img-top" src="../assets/images/p9.jpeg" alt="Card image cap"  height="250px">
                 <div class="card-body">
                     <h6 class="name">Pastor Ademola Moses Olubode [Director of Exams, Records, and Policy Issues]</h6>
                     <p class="bio">Pastor Olubode is the Parish Pastor of RCCG International Chapel, Long Island (RCCGHHH). He is also a AWS/GRC and Cybersecurity Analyst. He enjoys playing music and sports.</p>
                 </div>
                 <button class="w-100">Read More</button>
             </div>
           </div>
        </div>
        <div data-aos="fade-right" class=" d-lg-flex team gap-3 mt-5">
            <div class="card byn">
                <img class="card-img-top" src="../assets/images/p2.jpeg" alt="Card image cap"  height="250px" >
                <div class="card-body">
                    <h6 class="name">Pastor Michael Oluwafemi [National coordinator RCCG Americas Continent 1]</h6>
                    <p class="bio">Pastor Oluwafemi is one of the Special Assistant to the Continental Overseer (SATCO) and the pastor in
                        charge of Province 3, Region 6. He is the national coordinator of School of Disciples RCCG Americas 1. 
                       </p>
                </div>
                <button class="w-100">Read More</button>

              </div>
              <div  class="card byn">
                <div class="profil">
                 <img class="card-img-top" src="../assets/images/p8.jpg" alt="Card image cap"  height="250px" >
                 <div class="card-body">
                    <h6 class="name">Pastor Enoch Badamosi [Assistant Director of Exams, Records, and Policy Issues]</h6>
                    <p class="bio">Pastor Enoch Badamosi is the Pastor in charge of PA Zone 2, The Americas. He is a senior health program Analyst with the City of Philadelphia.trained attorney with LL.M Health Law & LL.M Corporate
                         Law & Finance from Widener Law School, </p>
                    </div>
                    <button class="w-100">Read More</button>

             </div>
           </div>
             
              <div class="card byn" >
                <img class="card-img-top" src="../assets/images/p4.jpg" alt="Card image cap"  height="250px">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button class="w-100">Read More</button>

              </div>
              <div class="card byn" >
                <img class="card-img-top" src="../assets/images/p5.jpg" alt="Card image cap"  height="250px" >
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button class="w-100">Read More</button>

              </div>
          </div>
          <div data-aos="fade-right" class="d-lg-flex team gap-3 mt-5">
              <div  class="card byn">
                <img class="card-img-top" src="../assets/images/p6.jpg" alt="Card image cap"  height="250px">
                     <div class="card-body">
                         <h6 class="name">Dr. Funto Oyewole [Director of Publications]</h6>
                         <p class="bio">Dr. Oyewole is a clinical psychologist and an ordained minister. She is passionate about
                             Christians living in good mental health. She is an educator, public speaker, and writer.
                            </p>
                     </div>
                     <button class="w-100">Read More</button>

     
                 </div>
                 <div  class="card byn">
                     <img class="card-img-top" src="../assets/images/p7.jpg" alt="Card image cap"  height="250px">
                     <div class="card-body">
                         <h6 class="name">Pastor Ademola Moses Olubode [Director of Exams, Records, and Policy Issues]</h6>
                         <p class="bio">Pastor Olubode is the Parish Pastor of RCCG International Chapel, Long Island (RCCGHHH). He is also a AWS/GRC and Cybersecurity Analyst. He enjoys playing music and sports.</p>
                     </div> 
                     <button class="w-100">Read More</button>
               </div>
               <div class="card byn">
                <img class="card-img-top" src="../assets/images/p3.jpg" alt="Card image cap"  height="250px" >
                <div class="card-body">
                    <h6 class="name">Pastor Mike Daniel [Director of Events and Programs]</h6>
                    <p class="bio">Pastor Mike Daniel joined the Redeemed Christian Church of God in 1989. He completed the
                        School of Disciples and graduated in 1999. In 2003, he started the School of Disciples in Dallas, 
                        TX, USA. Presently, he serves as the Director of Programs at SOD.
                       </p>
                    </div>
                <button class="w-100">Read More</button>
              </div>
          
          </div>

          
        </div>
</template>
<style>
.bio{
    font-size: 14px;
}
.byn{
    width: 18rem;
}
img{
    object-fit: cover;
}
.home{
    background: rgb(30, 18, 70);
}
.custom-card {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
  }
  .team{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
@media (max-width:720px){
.byn{
    width: 100%;
    margin-bottom: 10px;
}
img{
    object-fit: cover;
}
}

</style>