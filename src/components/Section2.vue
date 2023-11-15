<script>
export default {
  name: 'Section2'
}
</script>

<template>
  <div class="container-lg">
    <img src="/imgs/Video.jpg" alt="">
    <div class="absolute">
      <div>
        <font-awesome-icon class="play-button" icon="fa-regular fa-circle-play" />
      </div>
      <div class="title">
        New music video
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  padding: 60px 0;

  .play-button {
    color: #F2870C;
    font-size: 90px;
    margin-bottom: 40px;
  }

  .absolute {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
}
</style>
