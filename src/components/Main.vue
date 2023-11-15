<script>
import Hero from './Hero.vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
export default {
  name: 'Main',
  components: {
    Hero,
    Section1,
    Section2,
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
</template>

<style lang="scss" scoped></style>
