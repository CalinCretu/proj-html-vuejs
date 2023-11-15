<script>
import Dropdown from './Dropdown.vue'
export default {
  components: {
    Dropdown
  },
  name: "Header",
  data() {
    return {
      toggle: false,
      logo: '/imgs/Logo.png',
      nav: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Blog',
          href: '#'
        },
        {
          text: 'Events',
          icon: '/imgs/dropdown_icon.svg',
          href: '#'
        },
        {
          text: 'Gallery',
          href: '#'
        },
        {
          text: 'About Us',
          href: '#'
        },
        {
          text: 'Contact Us',
          href: '#'
        },
        {
          text: 'Shop',
          icon: '/imgs/dropdown_icon.svg',
          href: '#'
        },
      ],
      icon: '/imgs/lens_icon.svg'
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="logo">
      <a href="#">
        <img :src="logo" alt="">
      </a>
    </div>
    <nav>
      <ul class="nav-items">
        <li class="item" v-for="(item, i) in nav" :key="i"><a :href="item.href">{{ item.text }}</a>
          <span><img @click="toggle = !toggle" class="dropdown-icon" :src="item.icon" alt=""></span>
        </li>
        <div v-show="toggle" class="dropdown">
          <Dropdown />
        </div>
        <span>
          <a href="#">
            <img class="icon" :src="icon" alt="">
          </a>
        </span>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1915px;
  margin: 0 auto;
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .logo {
    max-width: 180px;
  }

  .nav-items {
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;


    .item {
      display: flex;
      align-items: center;
      margin: 0 10px;
      line-height: 1.5rem;
    }

    .item:hover {
      color: #F2870C;
    }

    .icon {
      -webkit-filter: invert(1);
      filter: invert(1);
    }

    .icon:hover {
      animation: spin 2s infinite;
    }


    .dropdown-icon {
      -webkit-filter: invert(1);
      filter: invert(1);
      width: 15px;
      margin: 0 8px;
    }

    .dropdown-icon:hover {
      width: 25px;
      margin: 0 3px;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 66%;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}
</style>
