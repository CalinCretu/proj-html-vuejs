<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Rights from './components/Rights.vue';

export default {
  components: {
    Header,
    Main,
    Footer,
    Rights,
  }
}
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="main">
    <Main />
  </div>
  <div class="footer">
    <Footer />
  </div>
  <div class="rights">
    <Rights />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.header,
.main,
.footer,
.rights {
  background-color: black;
}
</style>
