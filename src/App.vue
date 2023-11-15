<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Main,
    Footer,
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
</template>

<style lang="scss">
@use './styles/general.scss';

.header,
.main,
.footer {
  background-color: black;
}
</style>
