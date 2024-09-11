<template>
    <div class="d-flex flex-column flex-md-row container mt-5 gap-4">
        <div data-aos="fade-up" class="col-md-6 col-12 ">
            <div class="d-flex flex-column gap-3 d-flex align-items-center align-items-md-start justify-content-center">
                    <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop-fill " viewBox="0 0 16 16">
                        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                    </svg>
                  <h3 class="abouthead">About Us</h3>
                  <p class="text-justify abouttxt">The School of Disciples, established in 1985 and coordinated
                     by Christ the Redeemer’s Ministries (the evangelical arm of the 
                     Redeemed Christian Church of God), is a place where Christians from 
                     all denominations learn how to be true disciples of Jesus Christ and deepen
                      their spiritual walk with God.From its inception, the Church has faced 
                      spiritual warfare, yet it has consistently triumphed because of the presence
                       of Christ’s disciples—men and women who endure hardship and remain steadfast 
                       in their faith. As the spiritual battle intensifies, the Bible warns of the enemy’s
                        increasing wrath (Revelation 12:12).In response, the Lord has commanded His 
                        disciples to raise up others, equipping them to continue the fight. This is the
                         mission of the School of Disciples: to prepare believers to stand firm in their 
                         faith through the power of the Holy Spirit.
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
                    Overseer. Its mission aligns with the biblical command in Matthew 28:19 to
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