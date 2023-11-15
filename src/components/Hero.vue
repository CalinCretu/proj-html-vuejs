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
  <div class="container">
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
.container {
  max-width: 1800px;
  margin: 0 auto;
  text-align: center;
  color: white;
  text-transform: uppercase;
  position: relative;

  .hero-image {}

  .absolute {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    .second-title {
      color: #F2870C;
      font-size: 25px;
      margin-bottom: 20px;
    }

    .title {
      font-size: 90px;
      margin-bottom: 25px;
    }

    .button {
      border: 1px solid rgb(244, 135, 11, 0.6);
      padding: 12px 50px;
      background-color: transparent;
      color: white;
      font-size: 15px;
    }

    .button:hover {
      cursor: pointer;
      background-color: rgb(244, 135, 11);
      border: 1px solid rgb(244, 135, 11);
    }
  }
}
</style>
