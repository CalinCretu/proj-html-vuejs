<script>
import Hero from './Hero.vue';
import Section1 from './Section1.vue';
export default {
  name: 'Main',
  components: {
    Hero,
    Section1,
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
    <section1 />
  </div>
</template>

<style lang="scss" scoped></style>
