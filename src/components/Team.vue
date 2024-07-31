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
<!--     <div class="mt-5 container align-items-center d-flex flex-column justify-content-center">
 -->        <div style=" background: rgb(30, 18, 70); height: 200px;" class=" d-flex align-items-center justify-content-center flex-column mt-5 ">
            <div class="container ">
                <h2 class="text-white"><span class="special">MEET</span> THE TEAM</h2>
            </div>
        </div>
       <div class="container  mt-5 text-center">
        <div class="d-lg-flex team ">
          <div class="col team_box mb-5">
             <div class="profil">
                <img src="../assets/images/Pastor5.jpg">

                <div class="info">
                    <h2 class="name">Chef</h2>
                    <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

            </div>
          </div>
            <div class="col team_box mb-5">
                <div class="profil">
                   <img src="../assets/images/Pastor2.jpg">
   
                   <div class="info">
                       <h2 class="name">Chef</h2>
                       <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   </div>
   
               </div>
             </div>
             <div class="col team_box mb-5">
                <div class="profil">
                   <img src="../assets/images/p1.jpg">
   
                   <div class="info">
                       <h2 class="name">Chef</h2>
                       <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   </div>
   
               </div>
             </div>
        </div>
        <div class="d-lg-flex team gap-5">
            <div class="col team_box mb-5">
               <div class="profil">
                  <img src="../assets/images/p2.jpeg">
  
                  <div class="info">
                      <h6 class="name">Pastor Michael Oluwafemi [National coordinator RCCG Americas Continent 1]</h6>
                      <p class="bio">Pastor Oluwafemi is one of the Special Assistant to the Continental Overseer (SATCO) and the pastor in
                         charge of Province 3, Region 6. He is the national coordinator of School of Disciples RCCG Americas 1. 
                        </p>
                  </div>
  
              </div>
            </div>
              <div class="col team_box mb-5">
                  <div class="profil">
                     <img src="../assets/images/p3.jpg">
     
                     <div class="info">
                         <h6 class="name">Pastor Mike Daniel [Director of Events and Programs]</h6>
                         <p class="bio">Pastor Mike Daniel joined the Redeemed Christian Church of God in 1989. He completed the
                             School of Disciples and graduated in 1999. In 2003, he started the School of Disciples in Dallas, 
                             TX, USA. Presently, he serves as the Director of Programs at SOD.
                            </p>
                     </div>
     
                 </div>
               </div>
               <div class="col team_box mb-5">
                  <div class="profil">
                     <img src="../assets/images/p4.jpg" style="background-position:top;">
     
                     <div class="info">
                         <h2 class="name">Chef</h2>
                         <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
     
                 </div>
               </div>
          </div>
          <div class="d-lg-flex team gap-5">
            <div class="col team_box mb-5">
               <div class="profil">
                  <img src="../assets/images/p5.jpg">
  
                  <div class="info">
                      <h2 class="name">Chef</h2>
                      <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
  
              </div>
            </div>
              <div class="col team_box mb-5">
                  <div class="profil">
                     <img src="../assets/images/p6.jpg">
     
                     <div class="info">
                         <h6 class="name">Dr. Funto Oyewole [Director of Publications]</h6>
                         <p class="bio">Dr. Oyewole is a clinical psychologist and an ordained minister. She is passionate about
                             Christians living in good mental health. She is an educator, public speaker, and writer.
                            </p>
                     </div>
     
                 </div>
               </div>
               <div class="col team_box mb-5">
                  <div class="profil">
                     <img src="../assets/images/p7.jpg">
     
                     <div class="info">
                         <h6 class="name">Pastor Ademola Moses Olubode [Director of Exams, Records, and Policy Issues]</h6>
                         <p class="bio">Pastor Olubode is the Parish Pastor of RCCG International Chapel, Long Island (RCCGHHH). He is also a AWS/GRC and Cybersecurity Analyst. He enjoys playing music and sports.</p>
                     </div>
     
                 </div>
               </div>
          </div>
          <div class="d-lg-flex team gap-5">
            <div class="col team_box mb-5">
               <div class="profile">
                  <img src="../assets/images/p8.jpg">
  
                  <div class="info">
                      <h6 class="name">Pastor Enoch Badamosi [Assistant Director of Exams, Records, and Policy Issues]</h6>
                      <p class="bio">Pastor Enoch Badamosi is the Pastor in charge of PA Zone 2, The Americas 1. He is a senior health program Analyst with the City of Philadelphia. He is a trained attorney with LL.M Health Law & LL.M Corporate Law & Finance from Widener Law School, DE. He is a doctoral candidate in Public Policy & Administration at Walden University, MN and a 
                        doctoral candidate in Transformational Leadership @ Redeemer’s University of North America.</p>
                  </div>
  
              </div>
            </div>
              <div class="col team_box mb-5">
                  <div class="profile">
                     <img src="../assets/images/p9.jpeg">
                     <div class="info">
                         <h6 class="name">Pastor Emmanuel Ojuolape [Assistant Director of Administration]</h6>
                         <p class="bio">Pastor Emmanuel O. Ojuolape is the Lead Pastor of RCCG Word of Life Center (WOLC), Silver Spring, Maryland.
 
                            Pastor Emmanuel, a scholar of faith, holds a Master’s degree in Theology and is a distinguished graduate of the School of Disciples and School of Deliverance from Christ the Redeemer’s Ministry.
                             
                            He is happily married to his beloved wife, Elizabeth Ojuolape, and they are blessed with children.
                            </p>
                     </div>
     
                 </div>
               </div>
          </div>
          
        </div>
</template>
<style>
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

.team h1{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    margin-bottom: 30px;
}

.team h1 span{
    color: #fac031;
    margin-left: 15px;
    font-family: mv boli;
}

.team h1 span::after{
    content: '';
    width: 100%;
    height: 2px;
    background: #fac031;
    display: block;
    position: relative;
    bottom: 15px;
}

.team .team_box{
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 13%;
}

.team .team_box .profile,.profil{
    width: 320px;
    height: 320px;
    border-radius: 50%;
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    transition: 0.4s;
    overflow: hidden;

}


.team .team_box .profile:hover{
    border-radius: 20px;
    height: 700px;
}
.team .team_box .profil:hover{
    border-radius: 20px;
    height: 540px;
}

.team .team_box .profile img{
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position:top;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    z-index: 2;
    transition: 0.4s;
}
.team .team_box .profil img{
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position:top;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    z-index: 2;
    transition: 0.4s;
}

.team .team_box .profile:hover img{
    border-radius: 20px;
    margin-top: -350px;
}
.team .team_box .profil:hover img{
    border-radius: 20px;
    margin-top: -250px;
}

.team .team_box .profile .info{
    position: absolute;
    text-align: center;
    top: 25%;
    transition: 0.4s;
    color: white;
    
}
.team .team_box .profil .info{
    position: absolute;
    text-align: center;
    top: 25%;
    transition: 0.4s;
    color: white;
    
}

.team .team_box .profile:hover .info{
    top: 45%;
    color:black;
}
.team .team_box .profil:hover .info{
    top: 56%;
    color:black;
}

.team .team_box .profile .info .name{
    color: white;
    margin-bottom: 15px;
}
.team .team_box .profile:hover .info .name{
    top: 45%;
    color: rgb(26, 8, 85);
    font-weight: bolder;
}
.team .team_box .profil:hover .info .name{
    top: 45%;
    color: rgb(26, 8, 85);
    font-weight: bolder;;
}

.team .team_box .profile .info .bio{
    width: 90%;
    text-align: center;
    margin: 0 auto 10px auto;
}
.team .team_box .profil .info .bio{
    width: 90%;
    text-align: center;
    margin: 0 auto 10px auto;
}

.team .team_box .profile .info .team_icon i{
    margin: 10px 5px 5px 0;
    cursor: pointer;
    transition: 0.3s;
}

.team .team_box .profile .info .team_icon i:hover{
    color: #fac031;
}
</style>