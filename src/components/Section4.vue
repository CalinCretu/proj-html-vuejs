<script>
export default {
  name: 'Section4',
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container-lg">
    <div class="container-md">
      <div class="card">
        <div class="second-title">Instrumental Rock</div>
        <div class="title">Album Out Now</div>
        <button class="button">Read More</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  background-image: url('imgs/cms_parallax.jpg');

  .container-md {
    text-align: start;
    padding: 240px 0;

    .title {
      margin-bottom: 40px;
    }
  }
}
</style>
