<script>
import { store } from '../store'
export default {
  name: 'HeroCards',
  props: {
    item: {
      hero_cards: Object,
    }
  },
  data() {
    return {
      store: store,
    }
  }
}
</script>

<template>
  <div class="card-container">
    <ul class="cards">
      <li class="card" v-for="hero_card in store.hero_card">
        <div>
          <font-awesome-icon class="icon" :icon="hero_card.image" />
        </div>
        <div class="card-title">
          {{ hero_card.title }}
        </div>
        <div class="card-description">
          {{ hero_card.description }}
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
  z-index: 3;

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
