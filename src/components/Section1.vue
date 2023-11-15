<script>
export default {
  name: 'Section1'
}
</script>

<template>
  <div class="container">
    <div class="second-title">
      Who we are
    </div>
    <div class="title">
      Sense the jazz
    </div>
    <div class="monologue">
      The story of jazz and blues society is the story of determiantion, pasison, idealism, comunity,and oof course,
      music. Founded in 1985 and incorporated in 1986m as a comunity based, not-fot-profit, charitable arts organization
      located in vancouver, british columbia, the society, from the very beginning, has worked diligently to establish
      vancouver as a center for the creation and exchange of sounds and ideas between the local, national and
      international music comunitie.
    </div>
    <button class="button">
      READ MORE
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 900px;
  margin: 0 auto;
  text-align: center;
  color: white;
  margin-top: 300px;
  text-transform: uppercase;

  .second-title {
    color: #F2870C;
    font-size: 25px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 80px;
    margin-bottom: 25px;
  }

  .monologue {
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 30px;
    text-transform: capitalize;
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
</style>
