<template>
    <div class="intouch d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
            <h1 class="text-center text-md-start">School of Disciples Learning Community</h1>
            <h4 class="col-md-9 col-12 text-center text-md-start lh-base">Join this community to understand more about the School of Disciples courses, Enroll now</h4>
        </div>
        <div>
            <router-link to="/register" class="startbtn">Get Started</router-link>
        </div>
    </div>
</template>
<style>
.intouch{
    background-image:linear-gradient(180deg, #0bccee 0%, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%), url(../assets/images/sod3.jpeg);  
    height: 300px;
    color: white;
    padding: 0 80px;
    background-size: cover;
}
.startbtn{
    background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
    width: 200px;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    text-decoration: none;
}
.startbtn:hover{
    background: linear-gradient(to right,rgb(141, 216, 22)  0%,  rgb(15, 197, 239) 100%);

}
@media screen and (max-width: 520px) {
    .intouch{
        padding:10px;
    }
    
}
</style>