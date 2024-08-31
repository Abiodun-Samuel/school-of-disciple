<template>
    <div id="carouselExample" class="carousel slide my-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="index"
          :class="{'active': index === 0}"
          :data-bs-target="'#carouselExample'"
          :data-bs-slide-to="index"
          :aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="image.src" class="d-block w-100" :alt="image.alt" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ image.title }}</h5>
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
 import image8 from '../assets/images/p1.jpg';
import image6 from '../assets/images/p2.jpeg';
import image3 from '../assets/images/p3.jpg';
import image4 from '../assets/images/p4.jpg';
import image5 from '../assets/images/p5.jpg';
import image10 from '../assets/images/p6.jpg';
import image7 from '../assets/images/p7.jpg';
import image11 from '../assets/images/newpp.jpg';
import image9 from '../assets/images/p9.jpeg';
import image2 from '../assets/images/Pastor2.jpg';
import image1 from '../assets/images/papa.jpg';

export default {
  name: "CarouselComponent",
  data() {
    return {
      images: [
        {
          src:image1,
          alt: "Slide 1",
        },
        {
          src: image2,
          alt: "Slide 2",
         
        },
        {
          src: image3,
          alt: "Slide 3",
    
        },
        {
          src: image4,
          alt: "Slide 4",
          
        },
        {
          src: image5,
          alt: "Slide 5",
         
        },
        {
          src: image6,
          alt: "Slide 6",
       
        },
        {
          src: image7,
          alt: "Slide 7",
        },
        {
          src: image8,
          alt: "Slide 8",
       
        },
        {
          src: image9,
          alt: "Slide 8",
       
        },
        {
          src: image10,
          alt: "Slide 8",
       
        },
        {
          src: image11,
          alt: "Slide 8",
       
        }
      ]
    };
  },
}
  </script>
  
  <style scoped>
  .carousel-item img {
    max-height: 400px;
    object-fit: cover;
  }
  </style>
  