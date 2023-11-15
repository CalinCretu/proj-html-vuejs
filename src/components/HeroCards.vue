<script>
export default {
  name: 'HeroCards',
  data() {
    return {
      cards: [
        {
          image: '/imgs/Subwoofer.svg',
          title: 'Original Ideas',
          description: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Ransom Text',
        },
        {
          image: '/imgs/Disc.svg',
          title: 'Music Studio',
          description: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Ransom Text',
        },
        {
          image: '/imgs/Headphones.svg',
          title: 'Acoustic Covers',
          description: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Ransom Text',
        },
      ]
    }
  }
}
</script>

<template>
  <div class="card-container">
    <ul class="cards">
      <li class="card" v-for="card in cards">
        <img class="image" :src="card.image" alt="">
        <div class="card-title">{{ card.title }}</div>
        <div class="card-description">{{ card.description }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  color: white;
  min-width: 1360px;
  margin: 0 auto;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    gap: 30px;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(18, 18, 18);
      padding: 60px;

      .card-title {
        text-transform: uppercase;
        font-size: 25px;
        margin: 30px 0px 15px 0px;
      }

      .card-description {
        font-size: 15px;
        color: grey;
        text-transform: capitalize;
      }

      .image {
        max-width: 100px;
        filter: invert(1);
      }
    }
  }
}
</style>
