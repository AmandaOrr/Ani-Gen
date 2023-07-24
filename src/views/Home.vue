<template>
  <div>
    <h1>WELCOME TO ANI-GEN NETWORK</h1>
    <div class="container">
        <!--swiper parent, needs slides events and nav-->
      <swiper
        :slides-per-view="3"
        :space-between="50"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
      <!--adding in navigation buttons in case user cant swipe-->
        <template #prev>
          <div class="swiper-button-prev"></div>
        </template>
        <template #next>
          <div class="swiper-button-next"></div>
        </template>
        <!--v-for to populate all the data from the JSON file-->
        <swiper-slide v-for="(item, index) in media" :key="index">
          <div class="card">
            <img :src="item.image" />
            <h2>{{ item.title }}</h2>
            <p>{{ item.year }}</p>
            <button @click="goToSecondPage(item.title)">WATCH</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
//import swiper, swiperslide
import { Swiper, SwiperSlide } from 'swiper/vue';
//import swipercore and navigation
import SwiperCore, { Navigation } from 'swiper/core';
//import swiper css
import 'swiper/swiper-bundle.css';
//tell swiper to use the Navigation imported
SwiperCore.use([Navigation]);

export default {
//register components
  components: {
    Swiper,
    SwiperSlide,
  },
//register the expected props
  props: ["media"],
//methods, from swiper documentation
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
    goToSecondPage(title) {
      //trigger the navigation to the watch path, pass the name of the page and the props to go with it
      this.$router.push({name: 'watch', query: { title }});
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Open+Sans&display=swap');
.container {
  display: flex;
  margin: 0 5%;
  justify-content: center;
  align-items: center;
  padding-bottom: 10%;
}

h1 {
    font-family: 'Koulen', cursive;
    text-align: center;
    font-size: 48pt;
    letter-spacing: .25rem;
}


.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  height: 50px;
  background-color: #5B7553;
  color: #040403 !important;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}



.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}

.swiper-button-prev::before,
.swiper-button-next::before {
  content: "<";
  font-size: 24px;
}

.card {
    margin: 0 20%;
    background-color: #C3E8BD;
    padding: 5%;
    border-radius: 22px;
    text-align: center;
    font-family: 'Koulen', cursive;
    font-size: 1.25rem;
    width: 60%;
    
}

img {
    max-width: 100%;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: -4px 3px 30px 6px rgba(157,219,173,0.61);
}

button {
    background-color: #5B7553;
    font-family: 'Koulen', cursive;
    padding: 1px 15px;
    border-radius: 10px;
    border: 2px solid #040403;
    font-size: 16pt;
    box-shadow: -4px 3px 30px 6px rgba(157,219,173,0.61);
}
</style>