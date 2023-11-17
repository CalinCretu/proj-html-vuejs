<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import HeroCards from './HeroCards.vue'
import { store } from '../store'
export default {
  name: 'Hero',
  components: {
    HeroCards,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      store: store,
      modules: [Autoplay, Pagination, Navigation, EffectCreative],
      photos: [
        'image-hero1.png',
        'image-hero2.png',
      ],
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <Swiper :autoplay="{ delay: 3000, disableOnInteraction: false, }" :slides-per-view="1" :loop="true"
      :effect="'creative'" :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }" :modules="modules">
      <SwiperSlide v-for="photo in photos">
        <img class="hero-image" :src="`public/${photo}`" alt="">
      </SwiperSlide>
    </Swiper>
    <div class="absolute">
      <div class="second-title">
        Instrumental Rock
      </div>
      <div class="title-hero">
        Music in this video
      </div>
      <button class="button">
        READ MORE
      </button>
    </div>
    <div class="hero-cards">
      <HeroCards :hero_cards="hero_card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  text-transform: uppercase;

  Swiper {
    z-index: 1;
  }

  .absolute {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .title-hero {
    margin-bottom: 30px;
  }
}
</style>
