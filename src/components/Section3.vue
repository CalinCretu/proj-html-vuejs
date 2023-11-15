<script>
export default {
  name: 'Section3',
  data() {
    return {
      cards: [
        {
          image: '/imgs/gallery1.jpg',
          title: 'A roll and bang the floor',
          icons: [
            {
              icon: 'fa-brands fa-spotify'
            },
            {
              icon: 'fa-brands fa-youtube'
            },
            {
              icon: 'fa-solid fa-music'
            },
            {
              icon: 'fa-solid fa-cloud'
            }
            ,
            {
              icon: 'fa-brands fa-safari'
            }
          ]
        },
        {
          image: '/imgs/gallery2.jpg',
          title: 'Your melody to our music',
          icons: [
            {
              icon: 'fa-brands fa-spotify'
            },
            {
              icon: 'fa-brands fa-youtube'
            },
            {
              icon: 'fa-solid fa-music'
            },
            {
              icon: 'fa-solid fa-cloud'
            }
            ,
            {
              icon: 'fa-brands fa-safari'
            }
          ]
        },
        {
          image: '/imgs/gallery3.jpg',
          title: 'Touching heaven on ferquency',
          icons: [
            {
              icon: 'fa-brands fa-spotify'
            },
            {
              icon: 'fa-brands fa-youtube'
            },
            {
              icon: 'fa-solid fa-music'
            },
            {
              icon: 'fa-solid fa-cloud'
            }
            ,
            {
              icon: 'fa-brands fa-safari'
            }
          ]
        },
        {
          image: '/imgs/gallery4.jpg',
          title: 'Music makes stronger beats',
          icons: [
            {
              icon: 'fa-brands fa-spotify'
            },
            {
              icon: 'fa-brands fa-youtube'
            },
            {
              icon: 'fa-solid fa-music'
            },
            {
              icon: 'fa-solid fa-cloud'
            }
            ,
            {
              icon: 'fa-brands fa-safari'
            }
          ]
        },
        {
          image: '/imgs/gallery5.jpg',
          title: 'Suond is the spark of time',
          icons: [
            {
              icon: 'fa-brands fa-spotify'
            },
            {
              icon: 'fa-brands fa-youtube'
            },
            {
              icon: 'fa-solid fa-music'
            },
            {
              icon: 'fa-solid fa-cloud'
            }
            ,
            {
              icon: 'fa-brands fa-safari'
            }
          ]
        },
        {
          image: '/imgs/gallery6.jpg',
          title: 'Make your night groovy',
          icons: [
            {
              icon: 'fa-brands fa-spotify'
            },
            {
              icon: 'fa-brands fa-youtube'
            },
            {
              icon: 'fa-solid fa-music'
            },
            {
              icon: 'fa-solid fa-cloud'
            }
            ,
            {
              icon: 'fa-brands fa-safari'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.cards.forEach((card) => {
      console.log(card.icons[0].prova);
    });
  }
}
</script>

<template>
  <div class="container">
    <div class="second-title">
      Who we are
    </div>
    <div class="title">
      Sense the Jazz
    </div>
    <ul class="cards">
      <li v-for="(item, i) in cards" :key="i">
        <img :src="item.image" alt="">
        <div class="cards-title">
          {{ item.title }}
        </div>
        <ul class="stream-on">
          <span class="grey">
            Stream On:
          </span>
          <li class="icons" v-for="(icon, i) in item.icons" :key="i">
            <a href="#"><font-awesome-icon :icon="icon.icon" /></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
  color: white;

  .second-title {
    color: #F2870C;
    font-size: 25px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 80px;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    row-gap: 20px;
    margin: 30px 0;

    .icons {
      color: white;
      margin: 0 10px;
    }

    .icons:hover {
      color: #F2870C;
    }

    .cards-title {
      font-size: 25px;
      text-transform: uppercase;
      line-height: 3rem;
    }

    .stream-on {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .grey {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
