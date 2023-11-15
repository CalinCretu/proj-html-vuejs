<script>
import Hero from './Hero.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
export default {
  name: 'Main',
  components: {
    Hero,
    Section1,
    Section2,
    Section3,
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
</template>

<style lang="scss" scoped></style>
