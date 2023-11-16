<script>
import Hero from './Hero.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
import Section4 from './Section4.vue';
import Section5 from './Section5.vue';
import Section6 from './Section6.vue';
import Carousel from './Carousel.vue';
export default {
  name: 'Main',
  components: {
    Hero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Carousel,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div>
    <Hero />
  </div>
  <div>
    <Section1 />
  </div>
  <div>
    <Section2 />
  </div>
  <div>
    <Section3 />
  </div>
  <div>
    <Section4 />
  </div>
  <div>
    <Section5 />
  </div>
  <div>
    <Section6 />
  </div>
  <div>
    <Carousel />
  </div>
</template>

<style lang="scss" scoped></style>
