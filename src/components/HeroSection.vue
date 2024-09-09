<template>
    <div class="heroSection" >
        <Nav_bar/>
        <div class="d-flex flex-column flex-md-row container justify-content-between align-items-md-center mt-5 mx-md-5 mx-3">
            <div class="d-flex flex-column  gap-3">
            <div class="d-flex  align-items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                  </svg>
                  <h3 class="mt-2">School Of Disciples</h3>
            </div>
            <div class="outer-headings">
                <h1 class="herotext">
                    Go Forth And Make
                    <div class="inner-headings">
                        <span>
                            diciples of all nations <br/>
                            teaching them to obey<br/> 
                            everything<br/>
                            I have commanded you.
                        </span>
                    </div>

                </h1>
            </div>
            <h3 class="mt-4" style="color: rgba(255,255,255,.6);">Join Us Now</h3>

        </div>
            <div class="w-25">
                <div class="startIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                      </svg>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script  setup>
import Nav_bar from '@/components/Nav_bar.vue'

</script>
<style scoped>
    .heroSection{
        background-image:linear-gradient(180deg, #0bccee 0%, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.5) 0%,
         rgba(255, 255, 255, 0) 100%), url(../assets/images/sod5.jpeg);  
        height: 650px;
        width: 100%;
        background-repeat: no-repeat;  
        object-fit: cover;
        background-size: cover;
        color: white;
    }
  
    .herotext{
        font-size: 70px;
        line-height: 1.1em;
        font-weight: Bold;
        letter-spacing: -.4px   
     }
     .startIcon{
        background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
        width: 100px;
        height: 100px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
     }
     .startIcon:hover{
        background: linear-gradient(to right,rgb(141, 216, 22) 0%, rgb(15, 197, 239)  100%);

     }
    .inner-headings{
        border: 0px solid #ddd;
        height: 50px;
        line-height: 40px;
        overflow: hidden;
        margin-top: 20px;

        
    }
    .inner-headings span{
        position: relative;
        font-size: 50px;
        animation: animation 10s ease-in-out infinite;
        text-transform: uppercase;
    }
    @keyframes animation{
        0%,100%{
            top: 0;
        }
        20%{
            top: 0;
        }
        25%{
            top: -50px;
        }
        45%{
            top: -50px;
        }
        50%{
            top:-100px;
        }
        70%{
            top: -100px;
        }
        75%{
            top: -150px;
        }
        95%{
            top:-150px;
        }
       
    }
    @media (max-width: 991.98px) {
        .herotext{
            font-size: 45px;
        }
        .inner-headings{
           height: 50px;
           font-size: 20px;
           line-height: 50px;

        }
        .inner-headings span{
        font-size: 25px;       
}
    }
</style>