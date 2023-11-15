<script>
import HeroCards from './HeroCards.vue'
export default {
  name: 'Hero',
  components: {
    HeroCards
  }
}
</script>

<template>
  <div class="container-lg">
    <img class="hero-image" src="/image-hero1.png" alt="">
    <div class="absolute">
      <div class="second-title">
        Instrumental Rock
      </div>
      <div class="title">
        Music in this video
      </div>
      <button class="button">
        READ MORE
      </button>
    </div>
    <div>
      <HeroCards />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  text-transform: uppercase;

  .absolute {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    margin-bottom: 30px;
  }
}
</style>
