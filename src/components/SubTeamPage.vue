<template>
  <div>
   <!--  <swiper ref="mySwiper" :slides-per-view="1" :loop="true" class="mySwiper">
      <swiper-slide>
        <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
      </swiper-slide>
    </swiper>
    <button @click="goPrev" class="nav-button">Previous</button>
    <button @click="goNext" class="nav-button">Next</button> -->
  </div>
</template>

<script>
/* import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperInstance: null,
    };
  },
  mounted() {
    // Store the Swiper instance after the component has mounted
    this.swiperInstance = this.$refs.mySwiper.swiper;
  },
  methods: {
    goNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    goPrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
  },
}; */
</script>

<style scoped>
.mySwiper {
  background-color: red;
  padding: 20px;
  border-radius: 10px;
}

.swiper-slide img {
  width: 100%;
  border-radius: 10px;
}

.nav-button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #0056b3;
}
</style>
