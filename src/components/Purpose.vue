<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="d-flex mt-5 flex-column justify-content-center align-items-center">
        <h3 class="goaltitle">The Purpose</h3>
        <p>Guiding every step towards a meaningful impact</p>
        <div class="timeline">
            <div class="contain left-container">
                <i class="fa fa-diamond goalicons shadow-sm" aria-hidden="true"></i>
                <div class="text-box shadow-sm">
                    <p>To impact basic teachings on every area of Christian living and service</p>
                    <span class="left-container-arrow "></span>
                    
                </div>
            </div>
            <div class="contain right-container">
                <i class="fa fa-diamond goalicons shadow-sm" aria-hidden="true"></i>
                <div class="text-box shadow-sm">
                    <p>To impact basic teachings on every area of Christian living and service</p>
                    <span class="right-container-arrow"></span>
                </div>
            </div>
            <div class="contain left-container">
                <i class="fa fa-diamond goalicons shadow-sm" aria-hidden="true"></i>
                <div class="text-box shadow-sm">
                    <p>To impact basic teachings on every area of Christian living and service</p>
                    <span class="left-container-arrow"></span>
                </div>

            </div>
            <div class="contain right-container">
                <i class="fa fa-diamond goalicons shadow-sm" aria-hidden="true"></i>
                <div class="text-box shadow-sm">
                    <p>To impact basic teachings on every area of Christian living and service</p>
                    <span class="right-container-arrow"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
    .timeline{
        position: relative;
        max-width: 1800px;
        margin:30px  auto;
        z-index: 1;
    }
    .contain{
        padding: 10px 50px;
        position: relative;
        width: 60%;
        animation: movedown 1s linear forwards;
        opacity: 0;
        z-index: 99;
    }
    .goaltitle{
        font-size: 30px;
    }
    @keyframes movedown {
        0%{
            opacity: 1;
            transform: translateY(-30px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    .contain:nth-child(1){
        animation-delay: 0s;
    }
    .contain:nth-child(2){
        animation-delay: 1s;
    }
    .contain:nth-child(3){
        animation-delay: 2s;
    }
    .contain:nth-child(4){
        animation-delay: 3s;
    }
    .text-box{
        padding:20px 15px;
        background: #fff;
        position: relative;
        border-radius: 6px;
    }
    .left-container{
        left: -10%;
    }
    .right-container{
        left: 50%;
    }
    .goalicons{
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        right: -20px;
        top: 32px;
        z-index: 10;
        background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
        display: flex;
        color:white;
        justify-content: center;
        align-items: center;
    }
    .right-container .goalicons{
        left: -20px;
    }
    .timeline::after{
        content: " ";
        position: absolute;
        width: 6px;
        height: 100%;
        background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
        top: 0;
        left: 50%;
        margin-left: -3px;
        border-radius: 30px;
        animation: moveline 4s linear forwards;
    }
    @keyframes moveline {
        0%{
            height: 0;
        }
        100%{
            height:100%;
        }
        
    }
    .left-container-arrow{
      height: 0;
      width: 0;
      position: absolute;
      top: 28px;
      z-index: 1;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid #fafafa8c;
      right: -15px;  
      background:none;
    }
    .right-container-arrow{
        height: 0;
        width: 0;
        position: absolute;
        top: 28px;
        z-index: 1;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid #fafafa8c;
        left: -15px;  
        background:none;
      }

      @media screen and (max-width:600px) {
        .timeline{
            margin: 50px auto;
            margin-left: 40px;

        }
        .timeline::after{
            left: 1px;
        }
        .contain{
            width: 100%;
            padding-left: 80px;
            padding-right: 25px;
        }
        .right-container{
            left: 0;
            margin-left: -30px;
        }
        .goalicons{
            left: 10px;
        }
        .right-container .goalicons{
            left: 10px;
        }
        .left-container .goalicons{
            left: 15px;
        }
        .left-container-arrow, .right-container-arrow{
            border-right: 15px solid #fff;
            border-left: 0;
            left: -15px;
        }
        
      }

</style>