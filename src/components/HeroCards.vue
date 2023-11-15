<script>
export default {
  name: 'HeroCards',
  data() {
    return {
      cards: [
        {
          image: 'fa-solid fa-drum',
          title: 'Original Ideas',
          description: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Ransom Text',
        },
        {
          image: 'fa-solid fa-compact-disc',
          title: 'Music Studio',
          description: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Ransom Text',
        },
        {
          image: 'fa-solid fa-headphones',
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
        <div>
          <font-awesome-icon class="icon" :icon="card.image" />
        </div>
        <div class="card-title">
          {{ card.title }}
        </div>
        <div class="card-description">
          {{ card.description }}
        </div>
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
      padding: 70px 60px;

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

      .icon {
        font-size: 100px;
        padding: 30px;
        border: 1px solid transparent;
      }
    }
  }

  .card:hover {
    .icon {
      color: #F2870C;
      border: 1px solid #f0a857;
      border-radius: 50%;
      box-shadow: 0px 0px 40px #F2870C;
    }
  }
}
</style>
